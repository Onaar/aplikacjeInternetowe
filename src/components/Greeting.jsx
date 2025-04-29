import Button from './Button'

function Greeting({ name, role }) {
    // let user = { name: "Jan", role: "Developer" };
    const isAdmin = false;

    return (
        <div>
            <h1>{name}</h1>
            <p>Rola: {role.toUpperCase()}</p>
            <Button isActive={true} isDisabled={false} />
            {/* {isAdmin ? <AdminPanel /> : <UserPanel />} */}
            <p>Dziś jest: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default Greeting;