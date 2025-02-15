// TutorRegistrationStore.js
import { makeObservable, observable, action } from "mobx";
import { SC } from "../../Services/serverCall";

class TutorRegistrationStore {
  formData = {
    subject: "",
    qualification: "",
    fee: "",
    location: "",
    profilePicture: null,
  };

  constructor() {
    makeObservable(this, {
      formData: observable,
      setField: action,
      submitForm: action,
      resetForm: action,
    });
  }

  setField(name, value) {
    this.formData[name] = value;
  }

  submitForm = async () => {
    try {
      const formData = new FormData();
      formData.append("subject", this.formData.subject);
      formData.append("qualification", this.formData.qualification);
      formData.append("fee", this.formData.fee);
      formData.append("location", this.formData.location);
      formData.append("profilePicture", this.formData.profilePicture);
  
      const response = await SC.postCall("/apply-tutor", formData);
  
      console.log("Tutor registration form submit response:", response);
  
      // Reset form after successful submission
      this.resetForm();
    } catch (error) {
      console.error("Error submitting tutor registration form:", error);
    }
  };
  

  resetForm = () => {
    this.formData = {
      subject: "",
      qualification: "",
      fee: "",
      location: "",
      profilePicture: null,
    };
  };
}

const tutorRegistrationStore = new TutorRegistrationStore();
export default tutorRegistrationStore;
