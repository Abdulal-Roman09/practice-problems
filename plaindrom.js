function palindrom(str) {
    let revstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i];

    }
    return revstr
}


const plaindrom = "madam"
if (plaindrom == palindrom(plaindrom)) {
    console.log("palindrome");
}
else {
    console.log("not a palindrome");
}
(palindrom(plaindrom));