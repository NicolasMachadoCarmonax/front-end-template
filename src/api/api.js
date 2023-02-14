import { api } from'./config';
import { Auth } from 'aws-amplify';

export async function createPrices(data) {
    const response = await api.post('/prices', data)
    return response
}

export async function getPrices() {
    const response = await api.get('/prices')
    return response?.data?.data
}

export async function editPrices(props) {
    try {

        const { date, data } = props;

        const response = await api.put(`/prices/${date}`, data)

        return response

    } catch (e) { console.log(e) }
}

export async function deletePrice(props) {
    try {

        const { date, data } = props;

        const response = await api.delete(`/prices/${date}`, { headers: {}, data })

        return response

    } catch (e) { console.log(e) }
}

export async function authenticate(data = { roles: 'all' }) {

    // Role needed to render component calling this High Order Function
    const { roles } = data;

    // Validate if user is logged In
    let user;
    try {
        user = await Auth.currentAuthenticatedUser()
    } catch (err) {
        user = err
    }
    // Conditions for user validation return

    // not logged
    if (user == 'The user is not authenticated') {
        return 'not-logged'
    }
    // logged
    if (user.attributes) {
        // no role validation needed
        if (roles === 'all') { return 'logged-allowed' }
        // role verification
        else {
            const role = user.attributes['custom:role']
            const validation = roles.indexOf(role)
            if (validation !== -1) { return 'logged-allowed'; };
            return 'logged-not-allowed'
        }
    }
}

export async function signUp(data = { email: '', password: '' }) {
    // Destructure login data values
    const { email, password } = data;
    // Sign in with Amplify
    let user;
    try { user = await Auth.signUp(email, password) }
    catch (err) { user = err }

    console.log(user)

}

export async function login(data = { email: '', password: '' }) {
    // Destructure login data values
    const { email, password } = data;
    // Sign in with Amplify
    let user;
    try { user = await Auth.signIn(email, password) }
    catch (err) { user = err }
    console.log(user)
    // Incorrect user or password
    if (user.name == 'NotAuthorizedException') {
        return 'incorrect'
    }
    // New password challenge required
    if (user.challengeName == 'NEW_PASSWORD_REQUIRED') {
        return 'new-password'
    }
    // ! FALTA ESCENARIO PARA NEW_PASSWORD_REQUIRED Y NO ME SE LA CONTRASEÑA
    const { attributes } = await Auth.currentAuthenticatedUser()

    if (attributes.email == email) {
        return 'logged-in'
    }

}

export async function newPasswordChallenge(data = { email: '', password: '' }) {
    const { newPassword } = data;
    const { email, password } = data.user

    let user;

    try { user = await Auth.signIn(email, password) }
    catch (err) { user = err }

    if (user?.challengeName !== 'NEW_PASSWORD_REQUIRED') {
        return 'back-to-login'
    }

    if (user?.challengeName === 'NEW_PASSWORD_REQUIRED') {
        try {
            const user = await Auth.completeNewPassword(user, newPassword);
            if (user?.challengeName === undefined) { return 'password-changed' }
        }
        catch (e) { }
    }


}

export async function sendNewPasswordEmail(data = '') {
    const { username } = data;
    const response = await Auth.forgotPassword(username)
    console.log(response)
    return response
}

export async function newPassword(data = { username: '', code: '' }) {
    try {
        const { username, code, new_password } = data;
        const res = await Auth.forgotPasswordSubmit(username, code, new_password)
        console.log(res)
        if (res === 'SUCCESS') { return res }
    } catch (e) {
        if(e.message == 'Invalid verification code provided, please try again.'){
            return 'mismatch'
        }
    }
}

export async function logout() { return await Auth.signOut() }
