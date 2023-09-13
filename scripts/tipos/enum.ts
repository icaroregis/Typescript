//serve para enumerar os dados e armezená-los em um grupo(objeto).
enum Permission {
  ADMIN,
  USER,
  READONLY,
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

console.log(Permission[2]);
