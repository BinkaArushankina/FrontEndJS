const phoneBook = {  //object naschego priloschenia
    contactList: [], //nassiw kontaktow, kaschdij kontakt object

    addContact(contact) { //metod kotorij prinimaet i doawlaet contacti
        if (contact.userName) { //esli stroka ne pustaja, esli ima takoe estj
            this.contactList.push(contact); // dobaw ego w spisok kontactow
            alert('Contact added');
        }
        this.updateContactList(); //wisiwaem metod obnowlenia soderschimiogo naschego spiska tel knischki
    },
    changeContact(updatedContact) { //ismenatj kontakt
        const selectedContactName = document.getElementById('changeContactName').value; //schto tschel wibral

        const index = this.contactList.findIndex(contact => contact.userName === selectedContactName); //index po kotoromu w spiske on nachoditsa berem
        this.contactList[index] = updatedContact; //samenaem ima

        this.updateContactList(); //wisiwaem metod obnowlenia soderschimiogo naschego spiska tel knischki
    },
    updateContactList() { //metod obnowlenia
        const contactList = document.getElementById('contactList');//polutschit ssilki na list
        contactList.innerHTML = ''; //satschischaem

        this.contactList.forEach(contact => { //nowij spisok
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Name: </strong> ${contact.userName}
                <strong>Email: </strong> ${contact.email}
                <strong>Phone Number: </strong> ${contact.phoneNumber}
                <strong>Company: </strong> ${contact.company}
                <strong>Address: </strong> ${contact.address}
            `;
            contactList.append(li); //dobawlaem w list nasch nowij spisok
        });
    }
}

//polutschaem wse ssilki
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactPhone = document.getElementById('contactPhone');
const contactCompany = document.getElementById('contactCompany');
const contactAddress = document.getElementById('contactAddress');

const addContactForm = document.getElementById('addContactForm');
addContactForm.addEventListener('submit', addContactHandler); //budet sopuskatsa funkzia po sobitiu submit

function addContactHandler(event) { //schtobi ne obnowlalas straniza kaschdij ras posle dobawlenia kontakta
    event.preventDefault(); //otmenaet defaultnoe powedenie tega, on dolschen bil westi seba tak a wedet swba ne tak kak dolschen

    const contactNameValue = contactName.value.trim(); //polutschaem snatschenie kotoroe wwel tschelowek
    const contactEmailValue = contactEmail.value.trim();
    const contactPhoneValue = contactPhone.value.trim();
    const contactCompanyValue = contactCompany.value.trim();
    const contactAddressValue = contactAddress.value.trim();

    const newContact = { //polutschili nowij object so wsemi dannimi, priswaiwaem santaschenie nowomu kontaktu
        userName : contactNameValue,  //userName eto key, a po klutscham poloschim snatschenia s nowim imenem
        email: contactEmailValue,
        phoneNumber: contactPhoneValue,
        company: contactCompanyValue,
        address: contactAddressValue
    }

    phoneBook.addContact(newContact); //wisiwaem funkziu addContact s nowim kontaktom i on ego samenaet

    addContactForm.reset(); //dobawili kontakt i potom
    populateChangeContactForm(); //sapuskaem etu funkziu sctobi on dobawlalsa w wipadajuschij spisok
}

const changeContactName = document.getElementById('changeContactName');
const changeContactEmail = document.getElementById('changeContactEmail');
const changeContactPhone = document.getElementById('changeContactPhone');
const changeContactCompany = document.getElementById('changeContactCompany');
const changeContactAddress = document.getElementById('changeContactAddress');

const changeContactForm = document.getElementById('changeContactForm');
changeContactForm.addEventListener('submit', changeContactHandler);

function changeContactHandler(event) { //schtobi ne obnowlalas straniza kaschdij ras posle dobawlenia kontakta
    event.preventDefault(); //otmenaet defaultnoe powedenie tega, on dolschen bil westi seba tak a wedet swba ne tak kak dolschen

    const changeContactNameValue = changeContactName.value.trim(); //polutschaem snatschenie kotoroe wwel tschelowek
    const changeContactEmailValue = changeContactEmail.value.trim();
    const changeContactPhoneValue = changeContactPhone.value.trim();
    const changeContactCompanyValue = changeContactCompany.value.trim();
    const changeContactAddressValue = changeContactAddress.value.trim();

    const newContact = { //polutschili nowij object so wsemi dannimi, priswaiwaem santaschenie nowomu kontaktu
        userName : changeContactNameValue,  //userName eto key, a po klutscham poloschim snatschenia s nowim imenem
        email: changeContactEmailValue,
        phoneNumber: changeContactPhoneValue,
        company: changeContactCompanyValue,
        address: changeContactAddressValue
    }

    phoneBook.changeContact(newContact); //wisiwaem funkziu addContact s nowim kontaktom i on ego samenaet

    changeContactForm.reset();
}


function populateChangeContactForm() {
    changeContactName.innerHTML = '';

    phoneBook.contactList.forEach(contact => { //w select moschno apenditj option
        const option = document.createElement('option');
        option.value = contact.userName;
        option.textContent = contact.userName;

        changeContactName.append(option); //sapulaem w select schtobi dobawlenie kontakti bili w wipadajuschem spiske
    })
}