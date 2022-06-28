import SignUpForm from "../../components/NavBar/SignUpForm/SignUpForm";

export default function AuthPage(props) {
    
    
    return (
        <main>
        <h1>AuthPage</h1>
        <SignUpForm setUser={props.setUser} />
        </main>
    );
  }