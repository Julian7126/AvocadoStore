import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <section className={`${styles.Hero} flex items-center justify-center h-40 bg-gradient-to-r from-purple-500 to-pink-500`}>
      <h1 className="text-4xl text-white font-bold text-center">Welcome to the Future</h1>
    </section>
  );
}
