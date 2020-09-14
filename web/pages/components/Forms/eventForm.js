import { useState } from "react";
import Style from "./style";

const CateringEventForm = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <Style.container>
      <Style.form
        onSubmit={sendEmail}
        action="https://formspree.io/mpzoaprl"
        method="POST"
      >
        <Style.input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="För- och efternamn"
          required
        />
        <Style.input
          type="email"
          name="email"
          placeholder="E-postadress"
          autoComplete="off"
          required
        />

        <Style.input
          type="text"
          name="telephone"
          placeholder="Telefonnummer"
          autoComplete="off"
          required
        />
        <Style.smallInput
          type="text"
          name="date"
          placeholder="Önskad datum"
          autoComplete="off"
          required
        />
        <Style.smallInput
          type="text"
          name="time"
          placeholder="Önskad tid"
          autoComplete="off"
          required
        />
        <Style.input
          type="text"
          name="message"
          placeholder="Typ av tillställning"
          autoComplete="off"
          required
        />

        <div className="attachButtonMargins">
          <input type="file" name="upload" id="file" />
          <label htmlFor="file">Bifoga bilder</label>
        </div>

        {status === "SUCCESS" ? (
          <p>Skickat!</p>
        ) : (
          <Style.button>Skicka</Style.button>
        )}
        {status === "ERROR" && <p>Något gick fel, försökt igen!</p>}
      </Style.form>
    </Style.container>
  );
};

export default CateringEventForm;
