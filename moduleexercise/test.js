let employee = (function() {
    let name;
    let age;
    let salary;
    let setAge = function(newAge) {
        age = newAge;
    };
    let setSalary = function(newSalary) {
        salary = newSalary;
    };
    let setName = function(name) {
        name = name;
    };
    let getAge = function() {
        return age;
    };
    let getSalary = function() {
        return salary;
    };
    let getName = function() {
        return name;
    };
    let increaseSalary = function(percentage) {
        return getSalary() * percentage + getSalary();
    };
    let incrementAge = function() {
        return getAge() += 1;
    };

    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    };
})();

// object literal
let employee = (function() {
    let name;
    let age;
    let salary;

    let getAge = function() {
        return age;
    };
    let getSalary = function() {
        return salary;
    };
    let getName = function() {
        return name;
    };

    return {
        setAge: function(newAge) {
            age = newAge;
        },
        setSalary: function(newSalary) {
            salary = newSalary;
        },
        setName: function(name) {
            name = name;
        },
        increaseSalary: function(percentage) {
            return getSalary() * percentage + getSalary();
        },
        incrementAge: function() {
            return getAge() += 1;
        }
    }

})();

//locally scoped Object literal
let employee = (function() {
    let name;
    let age;
    let salary;

    let employeeObject = {};

    let getAge = function() {
        return age;
    };
    let getSalary = function() {
        return salary;
    };
    let getName = function() {
        return name;
    };

    emloyeeObject.setAge = function(newAge) {
        age = newAge;
    };
    emloyeeObject.setSalary = function(newSalary) {
        salary = newSalary;
    };
    emloyeeObject.setName = function(name) {
        name = name;
    };
    emloyeeObject.increaseSalary = function(percentage) {
        return getSalary() * percentage + getSalary();
    };
    emloyeeObject.incrementAge = function() {
        return getAge() += 1;
    };

    return employeeObject;
})();


// employee.extension = function() {
//     let address;
//     let setAddress = function(newAdress) {
//         address = newAdress;
//     }
//     let getAddress = function() {
//         return address;
//     }
//     return {
//         setAddress: setAddress,
//         getAddress: getAddress,
//         address: address
//     }
// };

employee.extension = function() {
    var address;
    let setAddress = function(newAdress) {
        address = newAdress;
    }
    let getAddress = function() {
        return address;
    }
    return {
        setAddress: setAddress,
        getAddress: getAddress,
        address: address,
    };
};