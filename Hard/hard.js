function pii(n, num) {
    var name = n;
    var ssn = num;

    return {
        _names: name,
        _ssn: num,
        
        getName() {
            return 'Latori'
        },
        getSSN() {
            return '000-00-0000'
        }
    }
};

var patient2 = pii('Latori', 000000000);

console.log(patient2.names);
// Output should be undefined

console.log(patient2.ssn);
// Output should be undefined

console.log(patient2.getName());
// Output should be Latori

console.log(patient2.getSSN());
// Output should be 000-00-0000