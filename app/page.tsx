import Header from "./components/main_component/header";

export default function Home() {
  return (
   <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-background.jpg')" }}>
  <Header />
  <div className="h-full flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">VERSA NEW COLLECTION</h1>
      <button className="px-6 py-2 border border-white text-white uppercase hover:bg-white hover:text-black transition">Shop Now</button>
    </div>
  </div>
</div>

  );
}
