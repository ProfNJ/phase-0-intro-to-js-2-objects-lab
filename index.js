const employee = {};
employee.name = "Name";
employee.streetAddress = "5th Ave";


function updateEmployeeWithKeyAndValue(obj, key, value){
    let nObj = {...obj};
    nObj[key] = value;
    return nObj;

}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    let nObj = {...obj};
    delete nObj[key];
    return nObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;

}