import { useState } from "react";

export default function MultiStepRegistrationWizard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <StepProgress currentStep={currentStep} formData={formData} />
      <Step1Personal
        formData={formData}
        setFormData={setFormData}
        currentStep={currentStep}
      />
      <Step2Account
        formData={formData}
        setFormData={setFormData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step3Review formData={formData} />
    </>
  );
}

function StepProgress({ currentStep, formData }) {
  return <p> Current Step : {currentStep}</p>;
}
function Step1Personal({ formData, setFormData, currentStep }) {
  function handleNameChange(e) {
    setFormData((previousData) => ({ ...previousData, name: e.target.value }));
  }
  function handleEmailChange(e) {
    setFormData((previousData) => ({ ...previousData, email: e.target.value }));
  }
  return (
    <>
      <label htmlFor="name">Name :</label>
      <input type="text" name="name" id="name" onChange={handleNameChange} />
      <label htmlFor="email">E-mail :</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleEmailChange}
      />
    </>
  );
}

function Step2Account({ formData, setFormData, setCurrentStep }) {
  function handleUserNameChange(e) {
    setFormData((previousData) => ({
      ...previousData,
      userName: e.target.value,
    }));
    setCurrentStep(2);
  }
  function handlePasswordChange(e) {
    setFormData((previousData) => ({
      ...previousData,
      password: e.target.value,
    }));
  }

  return (
    <>
      <label htmlFor="username">User Name :</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleUserNameChange}
      />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handlePasswordChange}
      />
    </>
  );
}

function Step3Review({ formData }) {
  return (
    <>
      <p>Name: {formData.name}</p>
      <p>E-mail: {formData.email}</p>
      <p>User Name : {formData.userName}</p>
      <p>Password : {formData.password}</p>
      <button>Submit</button>
    </>
  );
}
