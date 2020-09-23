import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BookEventDiv = styled.div`
  width: 90%;

  p:nth-child(2) {
    margin-top: 24px;
  }

  p:last-child {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Form = styled.form`
  width: 90%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 0.25px solid #0b3546;
  ::placeholder {
    padding-left: 10px;
  }
`;

const SmallInput = styled.input`
  width: 50%;
  height: 50px;

  border: 0.25px solid #0b3546;
  ::placeholder {
    padding-left: 10px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  background-color: var(--baked-orange);
  height: 55px;
  border: none;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

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
    <Container>
      <BookEventDiv>
        <h3>Boka plats</h3>
        <p>Vill du boka plats på ett pass eller ett event?</p>
        <p>Fyll i formuläret och se om det finns lediga platser.</p>
      </BookEventDiv>

      <Form
        onSubmit={sendEmail}
        action="https://formspree.io/mpzoaprl"
        method="POST"
      >
        <Input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="För- och efternamn"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-postadress"
          autoComplete="off"
          required
        />

        <Input
          type="text"
          name="telephone"
          placeholder="Telefonnummer"
          autoComplete="off"
          required
        />
        <SmallInput
          type="text"
          name="date"
          placeholder="Önskad datum"
          autoComplete="off"
          required
        />
        <SmallInput
          type="text"
          name="time"
          placeholder="Önskad tid"
          autoComplete="off"
          required
        />
        <Input
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

        {status === "SUCCESS" ? <p>Skickat!</p> : <Button>Skicka</Button>}
        {status === "ERROR" && <p>Något gick fel, försökt igen!</p>}
      </Form>
    </Container>
  );
};

export default CateringEventForm;
