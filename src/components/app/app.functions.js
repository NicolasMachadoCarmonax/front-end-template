export function hideNav (props) {
    const { appRef } = props
    const app = appRef?.current
    app && (app.style.gridTemplateColumns = '2% 94% 4%');
}

export function showNav (props) {
    const { appRef } = props
    const app = appRef.current
    app.style.gridTemplateColumns = '2% 84% 12% 2%';
}