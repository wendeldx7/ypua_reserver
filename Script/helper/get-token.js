const getToken = (req) => {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1]
    return token
};

export default getToken;