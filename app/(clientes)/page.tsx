"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto py-10 max-lg:px-2 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#333]">
        Mi rutina
      </h1>

      {[
        {
          title: "Circuito 1",
          items: [
            "Sentadilla con barra — 6-8 reps",
            "Saltos al cajón — 6 reps",
            "Caminata de oso lateral",
            "Plancha lateral con movilidad de brazo",
          ],
        },
        {
          title: "Circuito 2",
          items: [
            "Dominadas con banda verde",
            "Lanzamiento de pelota de 4kg — 6 reps",
            "Medio puente con pelota violeta — 12 reps",
            "Espinales alternadas — 10 reps",
          ],
        },
        {
          title: "Circuito 3",
          items: [
            "Pecho inclinado alternado con mancuernas — 8 reps",
            "Lanzamientos hacia arriba con pelota de 4kg a un brazo — 6 reps",
            "Caminata lateral con banda sobre rodillas",
            "Espinales (2 lados) — 12 reps",
          ],
        },
        {
          title: "Circuito 4",
          items: [
            "Vitalizaciones con kettlebell — 15 reps",
            "Medio puente con mancuerna a una pierna — 10 reps",
            "Abdominales bollas — 12 reps",
          ],
        },
        {
          title: "Circuito 5",
          items: [
            "Press hombros con barra — 6 reps",
            "Lanzamientos de pelota hacia arriba — 6 reps",
            "Vuelos laterales — 12 reps",
          ],
        },
        {
          title: "Circuito 6",
          items: ["Estocadas búlgaras con kettlebell — 10 reps"],
        },
      ].map((circuit, i) => (
        <div
          key={i}
          className="mb-6 max-lg:mb-2 p-5 rounded-2xl border border-gray-200 bg-white transition"
        >
          <p className="text-lg font-semibold mb-3 text-[#222]">
            {circuit.title}
          </p>
          <ul className="space-y-1.5 max-md:space-y-5 text-gray-700">
            {circuit.items.map((item, j) => (
              <li key={j} className="flex items-start gap-x-2">
                <span className="shrink-0 w-2 h-2 mt-2 bg-black rounded-full"></span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
