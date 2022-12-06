function canGiveBlood(giveBlood , takeBlood) {
    if (giveBlood == "O-") {
        if (takeBlood == 'string') {
            return "true"
        }
    } else if (giveBlood == "O+") {
        if (takeBlood == "O+" || takeBlood == "A+" || takeBlood == "AB+" || takeBlood == "B+") {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "A-") {
        if (takeBlood == "AB+" || takeBlood == "A+" || takeBlood == "A-" || takeBlood == "AB-") {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "A+") {
        if (takeBlood == "AB+" || takeBlood == "A+") {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "B-") {
        if (takeBlood == "AB+" || takeBlood == "AB-" || takeBlood == "B+" || takeBlood == "B-" ) {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "B+") {
        if (takeBlood == "AB+" || takeBlood == "B+") {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "AB-") {
        if (takeBlood == "AB-" || takeBlood == "AB+") {
            return "true"
        } else {
            return "false"
        }
    } else if (giveBlood == "AB+") {
        if (takeBlood == "AB+") {
            return "true"
        } else {
            return "false"
        }
    }
}

console.log(canGiveBlood("O+", "A+"))
console.log(canGiveBlood("A-","B-"))
console.log(canGiveBlood("A-","AB+"))