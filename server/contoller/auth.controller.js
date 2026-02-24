exports.signin = async (req, res) => {
    try {
        res.status(200).json({ message: "login success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to login " })

    }
}

exports.registerEmployee = async (req, res) => {
    try {
        res.status(200).json({ message: "registerEmployee success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to register Employee " })

    }
}

exports.signout = async (req, res) => {
    try {
        res.status(200).json({ message: "logout success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to logout " })

    }
}
exports.sendOtp = async (req, res) => {
    try {
        res.status(200).json({ message: "sendOtp success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable tosendOtp " })

    }
}
exports.verifyOtp = async (req, res) => {
    try {
        res.status(200).json({ message: "verifyOtp success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to verifyOtp " })

    }
}

exports.forgetPassword = async (req, res) => {
    try {
        res.status(200).json({ message: "forgetPassword success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to forgetPassword " })

    }
}

exports.chnagePassword = async (req, res) => {
    try {
        res.status(200).json({ message: "chnagePassword success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "unable to chnagePassword " })

    }
}
