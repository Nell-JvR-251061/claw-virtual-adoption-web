import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

function AnimalAddFrom() {
  return (
    <Form>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the animal's name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Male">
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter animal's age" />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Breed</Form.Label>
          <Form.Select defaultValue="Other">
            <option>Affenpinscher</option>
            <option>Afghan Hound</option>
            <option>Airedale Terrier</option>
            <option>Akita</option>
            <option>Alaskan Malamute</option>
            <option>American Staffordshire Terrier</option>
            <option>Anatolian Shepherd</option>
            <option>Australian Cattle Dog</option>
            <option>Australian Shepherd</option>
            <option>Basenji</option>
            <option>Basset Hound</option>
            <option>Beagle</option>
            <option>Beardie</option>
            <option>Belgian Malinois</option>
            <option>Bernese Mountain Dog</option>
            <option>Bichon Frise</option>
            <option>Bloodhound</option>
            <option>Bolognese</option>
            <option>Border Collie</option>
            <option>Borzoi</option>
            <option>Boston Terrier</option>
            <option>Boxer</option>
            <option>Brittany</option>
            <option>Brussels Griffon</option>
            <option>Bull Terrier</option>
            <option>Bulldog</option>
            <option>Bullmastiff</option>
            <option>Cairn Terrier</option>
            <option>Cane Corso</option>
            <option>Cardigan Welsh Corgi</option>
            <option>Cavalier King Charles Spaniel</option>
            <option>Chesapeake Bay Retriever</option>
            <option>Chihuahua</option>
            <option>Chinese Crested</option>
            <option>Chinese Shar-Pei</option>
            <option>Chow Chow</option>
            <option>Chug</option>
            <option>Cocker Spaniel</option>
            <option>Collie</option>
            <option>Dachshund</option>
            <option>Dalmatian</option>
            <option>Doberman Pinscher</option>
            <option>Dogue de Bordeaux</option>
            <option>English Cocker Spaniel</option>
            <option>English Setter</option>
            <option>English Springer Spaniel</option>
            <option>French Bulldog</option>
            <option>German Shepherd</option>
            <option>German Shorthaired Pointer</option>
            <option>Giant Schnauzer</option>
            <option>Golden Retriever</option>
            <option>Gordon Setter</option>
            <option>Great Dane</option>
            <option>Great Pyrenees</option>
            <option>Greyhound</option>
            <option>Havanese</option>
            <option>Irish Setter</option>
            <option>Irish Wolfhound</option>
            <option>Italian Greyhound</option>
            <option>Jack Russell Terrier</option>
            <option>Japanese Chin</option>
            <option>Labradoodle</option>
            <option>Labrador Retriever</option>
            <option>Lhasa Apso</option>
            <option>Maltese</option>
            <option>Mastiff</option>
            <option>Miniature Pinscher</option>
            <option>Miniature Schnauzer</option>
            <option>Newfoundland</option>
            <option>Old English Sheepdog</option>
            <option>Papillon</option>
            <option>Pekingese</option>
            <option>Pembroke Welsh Corgi</option>
            <option>Pointer</option>
            <option>Pomeranian</option>
            <option>Poodle</option>
            <option>Portuguese Water Dog</option>
            <option>Pug</option>
            <option>Rhodesian Ridgeback</option>
            <option>Rottweiler</option>
            <option>Saint Bernard</option>
            <option>Samoyed</option>
            <option>Schipperke</option>
            <option>Scottish Terrier</option>
            <option>Shetland Sheepdog</option>
            <option>Shiba Inu</option>
            <option>Shih Tzu</option>
            <option>Siberian Husky</option>
            <option>Silky Terrier</option>
            <option>Staffordshire Bull Terrier</option>
            <option>Standard Schnauzer</option>
            <option>Tibetan Mastiff</option>
            <option>Tibetan Terrier</option>
            <option>Toy Poodle</option>
            <option>Vizsla</option>
            <option>Weimaraner</option>
            <option>Welsh Terrier</option>
            <option>West Highland White Terrier</option>
            <option>Whippet</option>
            <option>Yorkshire Terrier</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Size</Form.Label>
          <Form.Select defaultValue="Medium">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Energy</Form.Label>
          <Form.Select defaultValue="Male">
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AnimalAddFrom;
