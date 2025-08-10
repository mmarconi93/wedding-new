import Title from "@/components/Title";

export default function Page() {
  return (
    <main>
      <section className="section">
        <Title>Accommodations</Title>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Hotels */}
          <div className="card leading-relaxed">
            <p>
              For hotel stays near the venue in Spring Branch / San Antonio,
              there are many great options.
            </p>
            <p className="mt-2">
              <strong>Pro tip:</strong> book early — September weekends fill up fast.
            </p>
            <a
              href="https://www.google.com/travel/search?q=hotels%20near%20lost%20mission%20spring%20branch%20tx&g2lb=4899568%2C4899570%2C4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958624%2C72959983%2C72990342&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAqBwoFOgNVU0Q&qs=CAAgACgB&ap=MABoAQ&ictx=111&ved=0CAAQ5JsGahgKEwiI2q30qYGPAxUAAAAAHQAAAAAQnQE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gold text-forest px-4 py-2 rounded-lg font-medium shadow hover:bg-goldmuted transition"
            >
              🏨 View Nearby Hotels
            </a>
          </div>

          {/* Airbnb */}
          <div className="card leading-relaxed">
            <p>
              Prefer a cozy home or unique stay? Spring Branch and the nearby
              Hill Country have plenty of Airbnb options.
            </p>
            <a
              href="https://www.airbnb.com/spring-branch-tx/stays"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gold text-forest px-4 py-2 rounded-lg font-medium shadow hover:bg-goldmuted transition"
            >
              🏡 Browse Nearby Airbnbs
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
