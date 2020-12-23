import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const [form, setForm] = React.useState({
  name: "",
  type: "",
  identify: "",
  lastName: "",
  age: "",
});

function onFieldChange(event) {
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
}

const [contacts, setContacts] = React.useState([]);

function onSubmit(event) {
  event.preventDefault();
  console.log(form);
  setContacts([...contacts, form]);
}

<Card className="custom-card">
  <CardContent>
    <form className="custom-form" onSubmit={onSubmit}>
      <label> Tipo de Identificación</label>
      <select name="type" value={form.type} onChange={(e) => onFieldChange(e)}>
        <option value="CC">Cédula</option>
        <option value="T.I">Tarjeta de Identidad</option>
        <option value="C.E">cédula de Extranjería</option>
      </select>
      <label> Identificación</label>
      <input
        name="identify"
        value={form.identify}
        onChange={(e) => onFieldChange(e)}
      />
      <label> Nombre</label>
      <input name="name" value={form.name} onChange={(e) => onFieldChange(e)} />
      <label> Apellido</label>
      <input
        name="lastName"
        value={form.lastName}
        onChange={(e) => onFieldChange(e)}
      />
      <label> Edad</label>
      <input name="age" value={form.age} onChange={(e) => onFieldChange(e)} />

      <Button variant="contained" color="primary" type="submit">
        GUARDAR
      </Button>
    </form>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>;
