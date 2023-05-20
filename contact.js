// Lista de contactos - 1
// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let contactList = [
  "Amari Grace",
  "Imani Faith",
  "Kamari Moon",
  "Zaire River",
  "Zendaya Sun",
  "Elijah Jayden ",
  "Malik Xavier",
  "Jordan Kyrie",
  "Caleb Carter",
  "Laila Amir",
  "Zuri Serenity",
];

console.log(contactList);

// Crea una función para añadir un nuevo contacto a una lista

function addContact(contact) {
  contactList.push(contact);
}
addContact("Ashanty Zakur");

console.log(contactList);

// Crea una función para borrar un contacto existente de la lista

function deleteContact(contact) {
  let cont1 = contactList.indexOf(contact);
  if (cont1 !== -1) {
    contactList.splice(cont1, 1);
    console.log(`The contact ${contact} has been eliminated`);
  } else {
    console.log(`The contact ${contact} does not exist`);
  }
}
deleteContact("Caleb Carter");

console.log(contactList);

// Crea una función para imprimir en consola los contactos presentes en la lista

function printContacts() {
  console.log("The contacts that this list contains are:");
  contactList.forEach(function (contact, index) {
    console.log(index + 1 + ". " + contact);
  });
}

printContacts();
