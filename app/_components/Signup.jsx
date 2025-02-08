import Button from "./Button";
import SignupForm from "./SignupForm";
import Modal from "./Modal";

function Signup() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="signup-form">
          <Button>Register</Button>
        </Modal.Open>
        <Modal.Window name="signup-form">
          <SignupForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Signup;
