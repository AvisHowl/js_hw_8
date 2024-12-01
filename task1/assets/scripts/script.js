const form = document.forms.registerForm;
const userName = form.elements.userName;
const email = form.elements.email;
const age = form.elements.age;
const maleGender = document.getElementById("genderInput1");
const femaleGender = document.getElementById("genderInput2");
const profession = form.elements.profession;
const password = form.elements.password;
const agreeTerms = form.elements.agreeTerms;
const button = document.querySelector(".button");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const genderError = document.getElementById("genderError");
const professionError = document.getElementById("professionError");
const passwordError = document.getElementById("passwordError");
const termsError = document.getElementById("termsError");

form.addEventListener("input", validateForm);

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	const validatedName = validateName(userName);
	const validatedEmail = validateEmail(email);
	const validatedAge = validateAge(age);
	const validatedGender = validateGender(maleGender, femaleGender);
	const validatedProfession = validateProffesion(profession);
	const validatedPassword = validatePassword(password);
	const validatedTerms = validateTerms(agreeTerms);
	if (
		validatedName &&
		validatedEmail &&
		validatedAge &&
		validatedGender &&
		validatedProfession &&
		validatedPassword &&
		validatedTerms
	) {
		console.log("Имя:", validatedName);
		console.log("Email:", validatedEmail);
		console.log("Возраст:", validatedAge);
		console.log("Профессия:", profession.value);
		console.log("Пароль:", validatedPassword);
		console.log("Пол:", maleGender.checked ? "Мужской" : "Женский");

		form.reset();
		button.disabled = true;
	}
});

function validateForm() {
	const validatedName = validateName(userName);
	const validatedEmail = validateEmail(email);
	const validatedAge = validateAge(age);
	const validatedGender = validateGender(maleGender, femaleGender);
	const validatedProfession = validateProffesion(profession);
	const validatedPassword = validatePassword(password);
	const validatedTerms = validateTerms(agreeTerms);

	button.disabled = !(
		validatedName &&
		validatedEmail &&
		validatedAge &&
		validatedGender &&
		validatedProfession &&
		validatedPassword &&
		validatedTerms
	);
}

function validateName(name) {
	const nameValue = name.value;
	const trimmedName = nameValue.trim();
	if (!trimmedName) {
		usernameError.classList.remove("none");
		return false;
	} else {
		usernameError.classList.add("none");
	}
	const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/;
	if (nameRegex.test(trimmedName)) {
		return trimmedName;
	} else {
		usernameError.classList.remove("none");
		return false;
	}
}

function validateEmail(email) {
	const emailValue = email.value;
	if (!emailValue) {
		emailError.classList.remove("none");
		return false;
	} else {
		emailError.classList.add("none");
	}
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (emailRegex.test(emailValue)) {
		return emailValue;
	} else {
		emailError.classList.remove("none");
		return false;
	}
}

function validateAge(age) {
	const ageValue = age.value;
	if (!ageValue) {
		ageError.classList.remove("none");
		return false;
	} else {
		ageError.classList.add("none");
		return ageValue;
	}
}

function validateGender(maleRadio, femaleRadio) {
	if (!maleRadio.checked && !femaleRadio.checked) {
		genderError.classList.remove("none");
		return false;
	} else {
		genderError.classList.add("none");
		return true;
	}
}

function validateProffesion(profession) {
	const professionValue = profession.value;
	if (!professionValue) {
		professionError.classList.remove("none");
		return false;
	} else {
		professionError.classList.add("none");
		return true;
	}
}

function validatePassword(password) {
	const passwordValue = password.value;
	if (!passwordValue) {
		passwordError.classList.remove("none");
		return false;
	} else {
		passwordError.classList.add("none");
		return passwordValue;
	}
}

function validateTerms(agreeTerms) {
	if (!agreeTerms.checked) {
		termsError.classList.remove("none");
		return false;
	} else {
		termsError.classList.add("none");
		return true;
	}
}

const inputFields = Array.from(form.elements);
inputFields.forEach(function (input) {
	input.addEventListener("focus", function () {
		input.style.border = "2px solid #4584cc";
	});

	input.addEventListener("blur", function () {
		input.style.border = "";
	});
});
