import NewsletterForm from "@/components/newsletter/NewsletterForm";
import NewsLetterList from "@/components/newsletter/NewsletterList";
import Statistics from "@/components/statistics/Statistics";

export default function Home() {
  return (
    <main>
      <NewsletterForm />
      <Statistics />
      <NewsLetterList />
    </main>
  );
}
