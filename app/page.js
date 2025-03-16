import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Blah";
  return (
    <main>
      <h1 className="text-3xl font-bold p-4">
        Collect customer feedback to build better product
      </h1>
      <div>
        Collect a feedback board in minutes, prioritize features, and build
        products your customers will love.
      </div>

      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
    </main>
  );
}
