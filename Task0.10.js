function findCommonLetters(str1, str2) {
    str1 + str2
    for(let i=0;i<str1.length;i++) {
        for(let j=0; j<str2.length;j++) {
            if(str1[i]==str2[j] && str1[i],str2[j]) {
                console.log(str1[i], str2[j])
            }
        }
    }
}

findCommonLetters("computers", "house")