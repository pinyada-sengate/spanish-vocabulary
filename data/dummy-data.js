import Category from "../models/category";
import Flashcard from "../models/flashcard";

export const CATEGORIES = [
  new Category("c1", "Animales", require("../assets/images/animals/cat.jpg")),
  new Category("c2", "Frutas", require("../assets/images/fruits/apple.jpg")),
  new Category(
    "c3",
    "Verduras",
    require("../assets/images/vegetables/lettuce.jpg")
  ),
  new Category(
    "c4",
    "Vehículos",
    require("../assets/images/vehicles/bicycle.jpg")
  ),
  new Category(
    "c5",
    "Professiones",
    require("../assets/images/professions/chemical.jpg")
  ),
];

export const FLASHCARDS = [
  new Flashcard(
    "f1",
    ["c5"],
    require("../assets/images/professions/chemical.jpg"),
    "química",
    "chemical"
  ),
  new Flashcard(
    "f2",
    ["c5"],
    require("../assets/images/professions/firefighter.jpg"),
    "bombero",
    "firefighter"
  ),
  new Flashcard(
    "f3",
    ["c5"],
    require("../assets/images/professions/pilot.jpg"),
    "piloto",
    "pilot"
  ),
  new Flashcard(
    "f4",
    ["c5"],
    require("../assets/images/professions/judge.jpg"),
    "jueza",
    "judge"
  ),
  new Flashcard(
    "f5",
    ["c5"],
    require("../assets/images/professions/electrician.jpg"),
    "electricista",
    "electrician"
  ),
  new Flashcard(
    "f6",
    ["c5"],
    require("../assets/images/professions/teacher.jpg"),
    "maestra",
    "teacher"
  ),
  new Flashcard(
    "f7",
    ["c5"],
    require("../assets/images/professions/dentist.jpg"),
    "dentista",
    "dentist"
  ),
  new Flashcard(
    "f8",
    ["c5"],
    require("../assets/images/professions/cashier.jpg"),
    "cajera",
    "cashier"
  ),
  new Flashcard(
    "f9",
    ["c5"],
    require("../assets/images/professions/computer-scientist.jpg"),
    "informático",
    "computer scientist"
  ),
  new Flashcard(
    "f10",
    ["c5"],
    require("../assets/images/professions/photographer.jpg"),
    "fotógrafo",
    "photographer"
  ),
  new Flashcard(
    "f11",
    ["c5"],
    require("../assets/images/professions/mailman.jpg"),
    "cartero",
    "mailman"
  ),
  new Flashcard(
    "f12",
    ["c5"],
    require("../assets/images/professions/architect.jpg"),
    "arquitecta",
    "architect"
  ),
  new Flashcard(
    "f13",
    ["c5"],
    require("../assets/images/professions/waiter.jpg"),
    "camarero",
    "waiter"
  ),
  new Flashcard(
    "f14",
    ["c5"],
    require("../assets/images/professions/hairdresser.jpg"),
    "peluquero",
    "hairdresser"
  ),
  new Flashcard(
    "f15",
    ["c5"],
    require("../assets/images/professions/journalist.jpg"),
    "periodista",
    "journalist"
  ),
  new Flashcard(
    "f16",
    ["c5"],
    require("../assets/images/professions/veterinarian.jpg"),
    "veterinaria",
    "veterinarian"
  ),
  new Flashcard(
    "f17",
    ["c5"],
    require("../assets/images/professions/chef.jpg"),
    "cocinero",
    "chef"
  ),
  new Flashcard(
    "f18",
    ["c5"],
    require("../assets/images/professions/police.jpg"),
    "policía",
    "police"
  ),
  new Flashcard(
    "f19",
    ["c5"],
    require("../assets/images/professions/doctor.jpg"),
    "médica",
    "doctor"
  ),
  new Flashcard(
    "f20",
    ["c5"],
    require("../assets/images/professions/singer.jpg"),
    "cantante",
    "singer"
  ),
  new Flashcard(
    "f21",
    ["c1"],
    require("../assets/images/animals/cat.jpg"),
    "gato",
    "cat"
  ),
  new Flashcard(
    "f22",
    ["c1"],
    require("../assets/images/animals/dog.jpg"),
    "perro",
    "dog"
  ),
  new Flashcard(
    "f23",
    ["c1"],
    require("../assets/images/animals/bird.jpg"),
    "pájaro",
    "bird"
  ),
  new Flashcard(
    "f24",
    ["c1"],
    require("../assets/images/animals/elephant.jpg"),
    "elefante",
    "elephant"
  ),
  new Flashcard(
    "f25",
    ["c1"],
    require("../assets/images/animals/lion.jpg"),
    "león",
    "lion"
  ),
  new Flashcard(
    "f26",
    ["c1"],
    require("../assets/images/animals/bear.jpg"),
    "oso",
    "bear"
  ),
  new Flashcard(
    "f27",
    ["c1"],
    require("../assets/images/animals/horse.jpg"),
    "caballo",
    "horse"
  ),
  new Flashcard(
    "f28",
    ["c1"],
    require("../assets/images/animals/tiger.jpg"),
    "tigre",
    "tiger"
  ),
  new Flashcard(
    "f29",
    ["c1"],
    require("../assets/images/animals/bull.jpg"),
    "toro",
    "bull"
  ),
  new Flashcard(
    "f30",
    ["c1"],
    require("../assets/images/animals/turtle.jpg"),
    "tortuga",
    "turtle"
  ),
  new Flashcard(
    "f31",
    ["c1"],
    require("../assets/images/animals/pig.jpg"),
    "cerdo",
    "pig"
  ),
  new Flashcard(
    "f32",
    ["c1"],
    require("../assets/images/animals/cow.jpg"),
    "vaca",
    "cow"
  ),
  new Flashcard(
    "f33",
    ["c1"],
    require("../assets/images/animals/sheep.jpg"),
    "oveja",
    "sheep"
  ),
  new Flashcard(
    "f34",
    ["c1"],
    require("../assets/images/animals/duck.jpg"),
    "pato",
    "duck"
  ),
  new Flashcard(
    "f35",
    ["c2"],
    require("../assets/images/fruits/apple.jpg"),
    "manzana",
    "apple"
  ),
  new Flashcard(
    "f36",
    ["c2"],
    require("../assets/images/fruits/banana.jpg"),
    "plátano",
    "banana"
  ),
  new Flashcard(
    "f37",
    ["c2"],
    require("../assets/images/fruits/pineapple.jpg"),
    "piña",
    "pineapple"
  ),
  new Flashcard(
    "f38",
    ["c2"],
    require("../assets/images/fruits/strawberry.jpg"),
    "fresa",
    "strawberry"
  ),
  new Flashcard(
    "f39",
    ["c2"],
    require("../assets/images/fruits/grape.jpg"),
    "uva",
    "grape"
  ),
  new Flashcard(
    "f40",
    ["c3"],
    require("../assets/images/vegetables/lettuce.jpg"),
    "lechuga",
    "lettuce"
  ),
  new Flashcard(
    "f41",
    ["c3"],
    require("../assets/images/vegetables/onion.jpg"),
    "cebolla",
    "onion"
  ),
  new Flashcard(
    "f42",
    ["c3"],
    require("../assets/images/vegetables/garlic.jpg"),
    "ajo",
    "garlic"
  ),
  new Flashcard(
    "f43",
    ["c3"],
    require("../assets/images/vegetables/pepper.jpg"),
    "pimiento",
    "pepper"
  ),
  new Flashcard(
    "f44",
    ["c3"],
    require("../assets/images/vegetables/carrot.jpg"),
    "zanahoria",
    "carrot"
  ),
  new Flashcard(
    "f45",
    ["c3"],
    require("../assets/images/vegetables/tomato.jpg"),
    "tomate",
    "tomato"
  ),
  new Flashcard(
    "f46",
    ["c4"],
    require("../assets/images/vehicles/bicycle.jpg"),
    "bicicleta",
    "bicycle"
  ),
  new Flashcard(
    "f47",
    ["c4"],
    require("../assets/images/vehicles/motorcycle.jpg"),
    "moto",
    "motorcycle"
  ),
  new Flashcard(
    "f48",
    ["c4"],
    require("../assets/images/vehicles/car.jpg"),
    "coche",
    "car"
  ),
  new Flashcard(
    "f49",
    ["c4"],
    require("../assets/images/vehicles/van.jpg"),
    "furgoneta",
    "van"
  ),
  new Flashcard(
    "f50",
    ["c4"],
    require("../assets/images/vehicles/truck.jpg"),
    "camión",
    "truck"
  ),
  new Flashcard(
    "f51",
    ["c4"],
    require("../assets/images/vehicles/tractor.jpg"),
    "tractor",
    "tractor"
  ),
  new Flashcard(
    "f52",
    ["c4"],
    require("../assets/images/vehicles/taxi.jpg"),
    "taxi",
    "taxi"
  ),
  new Flashcard(
    "f53",
    ["c4"],
    require("../assets/images/vehicles/ambulance.jpg"),
    "ambulancia",
    "ambulance"
  ),
  new Flashcard(
    "f54",
    ["c4"],
    require("../assets/images/vehicles/bus.jpg"),
    "autobús",
    "bus"
  ),
  new Flashcard(
    "f55",
    ["c4"],
    require("../assets/images/vehicles/metro.jpg"),
    "metro",
    "metro"
  ),
  new Flashcard(
    "f56",
    ["c4"],
    require("../assets/images/vehicles/train.jpg"),
    "tren",
    "train"
  ),
  new Flashcard(
    "f57",
    ["c4"],
    require("../assets/images/vehicles/boat.jpg"),
    "barca",
    "boat"
  ),
  new Flashcard(
    "f58",
    ["c4"],
    require("../assets/images/vehicles/ship.jpg"),
    "barco",
    "ship"
  ),
  new Flashcard(
    "f59",
    ["c4"],
    require("../assets/images/vehicles/helicopter.jpg"),
    "helicóptero",
    "helicopter"
  ),
  new Flashcard(
    "f60",
    ["c4"],
    require("../assets/images/vehicles/airplane.jpg"),
    "avión",
    "airplane"
  ),
  new Flashcard(
    "f61",
    ["c4"],
    require("../assets/images/vehicles/rocket.jpg"),
    "cohete",
    "rocket"
  ),
  new Flashcard(
    "f62",
    ["c4"],
    require("../assets/images/vehicles/spaceship.jpg"),
    "nave espacial",
    "spaceship"
  ),
];
