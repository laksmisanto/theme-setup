"use client";
import { useState } from "react";

const CATEGORIES = [
  "National",
  "International",
  "Sports",
  "Technology",
  "Entertainment",
  "Health",
  "Business",
];

const ARTICLES = [
  {
    id: 1,
    slug: "election-results-2026",
    category: "National",
    title: "Historic Election Results Reshape National Political Landscape",
    summary:
      "Voter turnout reached a record 78% as the ruling coalition secured a narrow majority, triggering immediate debate over cabinet formation and policy direction.",
    author: "Fatima Rahman",
    authorUsername: "fatima_r",
    date: "May 16, 2026",
    readTime: "5 min",
    tags: ["Election", "Politics", "Democracy"],
    image:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "global-climate-summit",
    category: "International",
    title: "Global Climate Summit Ends With Landmark Carbon Pledge",
    summary:
      "143 nations agreed to cut emissions by 60% before 2035, with a $500 billion fund established for developing nations.",
    author: "Arjun Mehta",
    authorUsername: "arjun_m",
    date: "May 15, 2026",
    readTime: "4 min",
    tags: ["Climate", "Environment", "UN"],
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    slug: "ai-chip-breakthrough",
    category: "Technology",
    title: "New AI Chip Delivers 10x Performance Leap at Half the Power Cost",
    summary:
      "A semiconductor startup unveiled a processor that could redefine the economics of large language model inference at scale.",
    author: "Nadia Karim",
    authorUsername: "nadia_k",
    date: "May 15, 2026",
    readTime: "3 min",
    tags: ["AI", "Hardware", "Tech"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    slug: "cricket-world-cup-final",
    category: "Sports",
    title: "Bangladesh Stuns Australia in Thrilling World Cup Final",
    summary:
      "In a nail-biting finish, the Tigers chased down 312 with two balls to spare to claim their first-ever ODI World Cup title.",
    author: "Rafiq Hossain",
    authorUsername: "rafiq_h",
    date: "May 14, 2026",
    readTime: "6 min",
    tags: ["Cricket", "WorldCup", "Bangladesh"],
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    featured: true,
  },
  {
    id: 5,
    slug: "healthcare-ai-diagnosis",
    category: "Health",
    title: "AI Diagnosis Tool Matches Specialist Accuracy in Rare Diseases",
    summary:
      "A clinical trial involving 12,000 patients found the model achieved 94.3% diagnostic accuracy, potentially transforming rural healthcare access.",
    author: "Dr. Priya Sen",
    authorUsername: "priya_sen",
    date: "May 14, 2026",
    readTime: "4 min",
    tags: ["Healthcare", "AI", "Medicine"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    slug: "film-festival-winner",
    category: "Entertainment",
    title: "Dhaka-Made Film Wins Palme d'Or at Cannes Festival",
    summary:
      "Director Tahmina Akter's debut feature 'The River's Memory' claimed the top prize, bringing Bangladeshi cinema to global spotlight.",
    author: "Sadia Islam",
    authorUsername: "sadia_i",
    date: "May 13, 2026",
    readTime: "3 min",
    tags: ["Cinema", "Cannes", "Culture"],
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    slug: "stock-market-record",
    category: "Business",
    title: "DSE Index Hits Record High Amid Foreign Investment Surge",
    summary:
      "The Dhaka Stock Exchange crossed the 10,000 mark for the first time, driven by a wave of foreign portfolio investments in the tech sector.",
    author: "Kamal Uddin",
    authorUsername: "kamal_u",
    date: "May 13, 2026",
    readTime: "3 min",
    tags: ["Finance", "Markets", "DSE"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    slug: "education-reform-bill",
    category: "National",
    title: "Parliament Passes Sweeping Education Reform Bill",
    summary:
      "The landmark legislation mandates free tertiary education for all students and introduces a new national curriculum framework.",
    author: "Fatima Rahman",
    authorUsername: "fatima_r",
    date: "May 12, 2026",
    readTime: "4 min",
    tags: ["Education", "Policy", "Parliament"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    featured: false,
  },
  {
    id: 9,
    slug: "space-mission-mars",
    category: "Technology",
    title: "Joint Space Agency Mission Confirms Water Ice at Mars Equator",
    summary:
      "A collaboration between ESA, ISRO and NASA detected substantial subsurface ice deposits that could support future manned missions.",
    author: "Nadia Karim",
    authorUsername: "nadia_k",
    date: "May 12, 2026",
    readTime: "5 min",
    tags: ["Space", "Mars", "Science"],
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    featured: false,
  },
  {
    id: 10,
    slug: "football-transfer-record",
    category: "Sports",
    title: "€450M Transfer Fee Shatters World Record in Historic Deal",
    summary:
      "A Spanish club broke all transfer records to acquire the 22-year-old Brazilian forward in what analysts call a watershed moment for football economics.",
    author: "Rafiq Hossain",
    authorUsername: "rafiq_h",
    date: "May 11, 2026",
    readTime: "3 min",
    tags: ["Football", "Transfer", "Record"],
    image:
      "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=800&q=80",
    featured: false,
  },
  {
    id: 11,
    slug: "dengue-outbreak-response",
    category: "Health",
    title: "City Corporation Launches Emergency Dengue Response Campaign",
    summary:
      "Mobile medical units will reach 200 neighborhoods as dengue cases climb 40% above the seasonal average.",
    author: "Dr. Priya Sen",
    authorUsername: "priya_sen",
    date: "May 11, 2026",
    readTime: "3 min",
    tags: ["Dengue", "Public Health", "City"],
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    featured: false,
  },
  {
    id: 12,
    slug: "music-streaming-record",
    category: "Entertainment",
    title: "Local Artist Breaks Spotify Record with 500M Streams in 30 Days",
    summary:
      "Singer Mim Ahmed becomes the first South Asian artist to achieve the half-billion mark in a single month, outpacing global chart-toppers.",
    author: "Sadia Islam",
    authorUsername: "sadia_i",
    date: "May 10, 2026",
    readTime: "2 min",
    tags: ["Music", "Streaming", "Record"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    featured: false,
  },
];

const TRENDING = ARTICLES.slice(0, 5);
const BREAKING = [
  "PM announces 3-day national holiday for World Cup victory celebrations",
  "Powerful 6.2 earthquake strikes coastal region; no casualties reported",
  "Central bank cuts interest rate to 5.25% to stimulate growth",
  "Bangladesh qualifies for 2028 Olympics in six track events",
];

const CAT_COLORS = {
  National: "#B45309",
  International: "#0369A1",
  Sports: "#15803D",
  Technology: "#6D28D9",
  Entertainment: "#BE185D",
  Health: "#0F766E",
  Business: "#92400E",
};
const CAT_BG = {
  National: "#FEF3C7",
  International: "#E0F2FE",
  Sports: "#DCFCE7",
  Technology: "#EDE9FE",
  Entertainment: "#FCE7F3",
  Health: "#CCFBF1",
  Business: "#FEF3C7",
};

function Badge({ category }) {
  return (
    <span
      style={{
        background: CAT_BG[category] || "#F3F4F6",
        color: CAT_COLORS[category] || "#374151",
        fontSize: 11,
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: 4,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {category}
    </span>
  );
}

function Meta({ article, light }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        color: light ? "rgba(255,255,255,0.7)" : "#9CA3AF",
        marginTop: 6,
      }}
    >
      <span>{article.author}</span>
      <span
        style={{
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: light ? "rgba(255,255,255,0.5)" : "#D1D5DB",
          flexShrink: 0,
        }}
      />
      <span>{article.date}</span>
      <span
        style={{
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: light ? "rgba(255,255,255,0.5)" : "#D1D5DB",
          flexShrink: 0,
        }}
      />
      <span>{article.readTime} read</span>
    </div>
  );
}

function FeaturedArticleCard({ article, large }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        height: large ? 480 : 300,
        width: "100%",
      }}
    >
      <img
        src={article.image}
        alt={article.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: large ? "28px 28px" : "20px 20px",
        }}
      >
        <Badge category={article.category} />
        <h2
          style={{
            color: "#fff",
            fontFamily: "'Georgia', serif",
            fontSize: large ? 26 : 18,
            fontWeight: 700,
            margin: "8px 0 0",
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </h2>
        {large && (
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 14,
              margin: "8px 0 0",
              lineHeight: 1.6,
            }}
          >
            {article.summary}
          </p>
        )}
        <Meta article={article} light />
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #F3F4F6",
        borderRadius: 10,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ height: 180, overflow: "hidden" }}>
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>
      <div
        style={{
          padding: "14px 16px 18px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Badge category={article.category} />
        <h3
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 16,
            fontWeight: 700,
            margin: "8px 0 0",
            lineHeight: 1.4,
            color: "#111827",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6B7280",
            margin: "8px 0 0",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {article.summary.substring(0, 90)}…
        </p>
        <Meta article={article} />
      </div>
    </div>
  );
}

function CompactArticleItem({ article, index }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        padding: "12px 0",
        borderBottom: index !== undefined ? "1px solid #F9FAFB" : "none",
        cursor: "pointer",
      }}
    >
      <img
        src={article.image}
        alt={article.title}
        style={{
          width: 72,
          height: 58,
          objectFit: "cover",
          borderRadius: 6,
          flexShrink: 0,
        }}
      />
      <div>
        <Badge category={article.category} />
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#111827",
            margin: "4px 0 4px",
            lineHeight: 1.4,
          }}
        >
          {article.title.substring(0, 65)}…
        </p>
        <span style={{ fontSize: 11, color: "#9CA3AF" }}>{article.date}</span>
      </div>
    </div>
  );
}

function HeadlineListItem({ text, idx }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "10px 0",
        borderBottom: "1px dashed #F3F4F6",
      }}
    >
      <span
        style={{
          background: "#DC2626",
          color: "#fff",
          fontSize: 10,
          fontWeight: 800,
          padding: "2px 6px",
          borderRadius: 4,
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        {idx + 1}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#1F2937",
          lineHeight: 1.4,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function SectionHeader({ title, category }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 4,
          height: 22,
          background: category ? CAT_COLORS[category] || "#DC2626" : "#DC2626",
          borderRadius: 2,
        }}
      />
      <h2
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: 20,
          fontWeight: 800,
          color: "#111827",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function TopBar() {
  return (
    <div
      style={{
        background: "#111827",
        color: "#9CA3AF",
        fontSize: 12,
        padding: "6px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          📅{" "}
          {new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          {["Facebook", "Twitter", "YouTube", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              style={{ color: "#9CA3AF", textDecoration: "none", fontSize: 11 }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ onSearch, searchQuery, setSearchQuery }) {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "2px solid #DC2626",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: 36,
              fontWeight: 900,
              color: "#111827",
              letterSpacing: -1,
            }}
          >
            <span style={{ color: "#DC2626" }}>THE</span> DAILY HERALD
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#9CA3AF",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: -2,
            }}
          >
            Independent · Fearless · Trusted
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            placeholder="Search news…"
            style={{
              border: "1.5px solid #E5E7EB",
              borderRadius: 6,
              padding: "8px 14px",
              fontSize: 13,
              width: 220,
              outline: "none",
            }}
          />
          <button
            onClick={onSearch}
            style={{
              background: "#DC2626",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 18px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function Navbar({ activeCategory, setActiveCategory }) {
  return (
    <div
      style={{
        background: "#1F2937",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          gap: 0,
          overflowX: "auto",
        }}
      >
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            padding: "14px 18px",
            fontSize: 13,
            fontWeight: 600,
            color: !activeCategory ? "#DC2626" : "#D1D5DB",
            background: "transparent",
            border: "none",
            borderBottom: !activeCategory
              ? "2px solid #DC2626"
              : "2px solid transparent",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Home
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "14px 18px",
              fontSize: 13,
              fontWeight: 600,
              color: activeCategory === cat ? "#DC2626" : "#D1D5DB",
              background: "transparent",
              border: "none",
              borderBottom:
                activeCategory === cat
                  ? "2px solid #DC2626"
                  : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

function BreakingNewsTicker() {
  return (
    <div
      style={{ background: "#DC2626", padding: "8px 0", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            background: "#fff",
            color: "#DC2626",
            fontSize: 11,
            fontWeight: 800,
            padding: "2px 8px",
            borderRadius: 3,
            flexShrink: 0,
            letterSpacing: "0.08em",
          }}
        >
          BREAKING
        </span>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div
            style={{
              display: "flex",
              gap: 60,
              animation: "marquee 30s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[...BREAKING, ...BREAKING].map((b, i) => (
              <span
                key={i}
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                ● {b}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function HeroSection({ articles }) {
  const hero = articles.find((a) => a.featured) || articles[0];
  const secondary = articles
    .filter((a) => a.featured && a.id !== hero.id)
    .slice(0, 2);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: secondary.length ? "1.6fr 1fr" : "1fr",
        gap: 16,
      }}
    >
      <FeaturedArticleCard article={hero} large />
      {secondary.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {secondary.map((a) => (
            <FeaturedArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

function LatestNewsSection({ articles }) {
  return (
    <div>
      <SectionHeader title="Latest News" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {articles.slice(0, 8).map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}

function CategorySection({ category, articles }) {
  const filtered = articles.filter((a) => a.category === category);
  if (!filtered.length) return null;
  const [main, ...rest] = filtered;
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        border: "1px solid #F3F4F6",
        padding: "20px",
      }}
    >
      <SectionHeader title={category} category={category} />
      <div
        style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 }}
      >
        <FeaturedArticleCard article={main} />
        <div>
          {rest.slice(0, 3).map((a, i) => (
            <CompactArticleItem key={a.id} article={a} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Sidebar({ articles }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Trending */}
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          border: "1px solid #F3F4F6",
          padding: 20,
        }}
      >
        <SectionHeader title="Trending Now" />
        {TRENDING.map((a, i) => (
          <div
            key={a.id}
            style={{
              display: "flex",
              gap: 10,
              padding: "10px 0",
              borderBottom:
                i < TRENDING.length - 1 ? "1px solid #F9FAFB" : "none",
              cursor: "pointer",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 22,
                fontWeight: 900,
                color: i === 0 ? "#DC2626" : "#E5E7EB",
                lineHeight: 1,
                flexShrink: 0,
                minWidth: 28,
              }}
            >
              0{i + 1}
            </span>
            <div>
              <Badge category={a.category} />
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#111827",
                  margin: "4px 0 0",
                  lineHeight: 1.4,
                }}
              >
                {a.title.substring(0, 60)}…
              </p>
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>
                {a.readTime} read
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Breaking */}
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          border: "1px solid #F3F4F6",
          padding: 20,
        }}
      >
        <SectionHeader title="Breaking Headlines" />
        {BREAKING.map((b, i) => (
          <HeadlineListItem key={i} text={b} idx={i} />
        ))}
      </div>
      {/* Tags */}
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          border: "1px solid #F3F4F6",
          padding: 20,
        }}
      >
        <SectionHeader title="Popular Tags" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            "Election",
            "Climate",
            "AI",
            "Cricket",
            "WorldCup",
            "Health",
            "Finance",
            "Cinema",
            "Mars",
            "Football",
            "Education",
            "Sports",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                color: "#374151",
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 20,
                cursor: "pointer",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      {/* Newsletter */}
      <div
        style={{
          background: "#1F2937",
          borderRadius: 10,
          padding: 20,
          color: "#fff",
        }}
      >
        <h3
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 17,
            fontWeight: 800,
            margin: "0 0 6px",
          }}
        >
          Stay Informed
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#9CA3AF",
            margin: "0 0 14px",
            lineHeight: 1.5,
          }}
        >
          Get the top stories delivered to your inbox every morning.
        </p>
        <input
          placeholder="Your email address"
          style={{
            width: "100%",
            border: "1px solid #374151",
            background: "#374151",
            color: "#fff",
            borderRadius: 6,
            padding: "9px 12px",
            fontSize: 13,
            marginBottom: 8,
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        <button
          style={{
            width: "100%",
            background: "#DC2626",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "9px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Subscribe Free
        </button>
      </div>
    </aside>
  );
}

function CategoryPage({ category, articles }) {
  const filtered = articles.filter((a) => a.category === category);
  return (
    <div>
      <div
        style={{
          borderBottom: `3px solid ${CAT_COLORS[category] || "#DC2626"}`,
          marginBottom: 24,
          paddingBottom: 10,
        }}
      >
        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 28,
            fontWeight: 900,
            color: "#111827",
            margin: 0,
          }}
        >
          {category}
        </h1>
        <p style={{ color: "#6B7280", fontSize: 14, margin: "4px 0 0" }}>
          {filtered.length} articles in this category
        </p>
      </div>
      {filtered.length === 0 ? (
        <div
          style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF" }}
        >
          <div style={{ fontSize: 48, marginBottom: 12 }}>📰</div>
          <p>No articles found in this category yet.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchResults({ query, articles }) {
  const results = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
  );
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 24,
            fontWeight: 900,
            color: "#111827",
            margin: 0,
          }}
        >
          Search results for &quot;
          <span style={{ color: "#DC2626" }}>{query}</span>&quot;
        </h1>
        <p style={{ color: "#6B7280", fontSize: 14, margin: "4px 0 0" }}>
          {results.length} articles found
        </p>
      </div>
      {results.length === 0 ? (
        <div
          style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF" }}
        >
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p>No results found. Try a different keyword.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {results.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#9CA3AF", marginTop: 60 }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 22,
                fontWeight: 900,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "#DC2626" }}>THE</span> DAILY HERALD
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6B7280" }}>
              Independent journalism you can trust. Covering news that matters
              since 2001.
            </p>
          </div>
          {[
            { title: "Sections", links: CATEGORIES },
            {
              title: "Company",
              links: ["About Us", "Careers", "Advertise", "Contact"],
            },
            {
              title: "Legal",
              links: [
                "Privacy Policy",
                "Terms of Use",
                "Cookie Policy",
                "Corrections",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  margin: "0 0 14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {col.title}
              </h4>
              {col.links.map((l) => (
                <div key={l}>
                  <a
                    href="#"
                    style={{
                      color: "#6B7280",
                      fontSize: 13,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid #1F2937",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 12 }}>
            © 2026 The Daily Herald. All rights reserved.
          </span>
          <span style={{ fontSize: 12 }}>
            Built with Next.js · Tailwind CSS · MERN Stack
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery.trim());
      setIsSearching(true);
      setActiveCategory(null);
    }
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setIsSearching(false);
    setSearchQuery("");
    setSearchTerm("");
  };

  const renderMain = () => {
    if (isSearching)
      return <SearchResults query={searchTerm} articles={ARTICLES} />;
    if (activeCategory)
      return <CategoryPage category={activeCategory} articles={ARTICLES} />;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <HeroSection articles={ARTICLES} />
        <LatestNewsSection articles={ARTICLES} />
        {["Sports", "Technology", "Entertainment", "Health"].map((cat) => (
          <CategorySection key={cat} category={cat} articles={ARTICLES} />
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: "#F9FAFB",
        minHeight: "100vh",
      }}
    >
      <TopBar />
      <Header
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <BreakingNewsTicker />
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 32,
            alignItems: "start",
          }}
        >
          <main>{renderMain()}</main>
          <Sidebar articles={ARTICLES} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
