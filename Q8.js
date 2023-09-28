// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.

let n = 6;
        for (let i = 0; i < n; i++) {
            for (let j = n - 1; j > i; j--) {
                process.stdout.write("*");
            }
            console.log();
        }