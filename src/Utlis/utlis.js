export const isLenderProfilePage = () => {
    // return window.location.pathname.indexOf('create-profile');
    return window.location.pathname;

}

export const validateEmail = (value) => {
    if (
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
            value
        )
    ) { return true; }

    return false;
};

export const PasswordMatch = (first, second) => {
    console.log("values--------", first, second)
    return first !== second
}
