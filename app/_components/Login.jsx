import Button from "./Button";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

function Login() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="login-form">
          <Button>Login</Button>
        </Modal.Open>
        <Modal.Window name="login-form">
          <LoginForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Login;
