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
// Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
// id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección

function addContact(id, firstName, lastname, phone, location) {
  let newContact = {
    id: id,
    firstName: firstName,
    lastname: lastname,
    phone: phone,
    location: location,
  };

  contactList.push(newContact);
}
addContact(1, "Sabari", "Zary", 6028768935, [
  { ciudad: "Cali", direccion: "calle 5 # 45-23" },
]);
addContact(2, "Yaili", "Tibey", 4568763467, [
  { ciudad: "Nigeria", direccion: "carrera 23 # 16-08" },
]);
console.log(contactList);

// Crea una función para borrar un contacto existente de la lista
// Ajusta la funcion eliminar un contacto para que puedan almacenar la siguiente información como objetos:
// id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección

function deleteContact(id) {
  let index = contactList.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contactList.splice(index, 2);
    console.log(
      `The contact identified with the ID:  ${id} has been eliminated`
    );
  } else {
    console.log(`The contact identified with the ID ${id} does not exist`);
  }
}
deleteContact(2);

console.log(contactList);

// Crea una función para imprimir en consola los contactos presentes en la lista

function printContacts() {
  console.log("The contacts that this list contains are:");
  contactList.forEach(function (contact, index) {
    console.log(index + 1 + ". " + contact);
  });
}

printContacts();

function contactUpdate(id, newContact) {
  let index = contactList.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contactList[index] = { ...contactList[index], ...newContact };
    console.log(
      `The contact identified with the ID:  ${id} was updated successfully`
    );
  } else {
    console.log(`The contact identified with the ID: ${id} was not found`);
  }
}

contactUpdate(1, {
  firstName: "Sabari",
  lastname: "Zaraty",
  phone: 6028768900,
  location: [{ ciudad: "Oshun", direccion: "calle 5 # 45-23" }],
});
