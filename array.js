let companies = ["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
alert(companies);