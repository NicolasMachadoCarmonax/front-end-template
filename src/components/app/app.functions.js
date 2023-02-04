export function hideNav (props) {
    const { appRef } = props
    const app = appRef?.current
    app && (app.style.gridTemplateColumns = '95% 5%');
}

export function showNav (props) {
    const { appRef } = props
    const app = appRef.current
    app.style.gridTemplateColumns = '93% 7%';
}