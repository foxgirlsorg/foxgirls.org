import { derived, writable } from "svelte/store";

export const LOCALES = ["en", "ru", "uk"] as const;
export type Locale = (typeof LOCALES)[number];

const LOCALE_COOKIE_NAME = "locale";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type Messages = {
  navbar: {
    home: string;
    about: string;
    projects: string;
    team: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcherLabel: string;
    english: string;
    russian: string;
    ukrainian: string;
  };
  hero: {
    scrollDown: string;
  };
  about: {
    title: string;
    highlight: string;
    descriptionLine1: string;
    descriptionLine2: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    highlight: string;
    subtitle: string;
    items: Array<{
      type: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    highlight: string;
    telegram: string;
    email: string;
    website: string;
  };
  socials: {
    title: string;
    items: Array<{
      description: string;
    }>;
  };
};

const messages: Record<Locale, Messages> = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      team: "Team",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageSwitcherLabel: "Select language",
      english: "English",
      russian: "Russian",
      ukrainian: "Ukrainian",
    },
    hero: {
      scrollDown: "Scroll down",
    },
    about: {
      title: "about",
      highlight: "us",
      descriptionLine1: "foxgirls.org is a small dev \"team\".",
      descriptionLine2: "Just friends united by shitcoding and anime foxgirls.",
      features: [
        {
          title: "Open Source",
          description: "(Almost) all our projects are open source and can be used by anyone.",
        },
        {
          title: "Independent",
          description: "We are a self-funded team free from corporate influence, building tools we love.",
        },
        {
          title: "Believers",
          description: "We believe in foxgirls supremacy.",
        },
      ],
    },
    projects: {
      title: "our",
      highlight: "projects",
      subtitle: "Explore our universe",
      items: [
        {
          type: "Team",
          description: "Our manga translation team. High-quality translation, cleaning and typesetting.",
        },
        {
          type: "API",
          description: "An API full of foxgirls.",
        },
      ],
    },
    team: {
      title: "our",
      highlight: "Team",
      telegram: "Telegram",
      email: "Email",
      website: "Website",
    },
    socials: {
      title: "Platforms & Socials",
      items: [
        { description: "Channel" },
        { description: "Open Source" },
      ],
    },
  },
  ru: {
    navbar: {
      home: "Главная",
      about: "О нас",
      projects: "Проекты",
      team: "Команда",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      languageSwitcherLabel: "Выберите язык",
      english: "English",
      russian: "Русский",
      ukrainian: "Українська",
    },
    hero: {
      scrollDown: "Прокрутить вниз",
    },
    about: {
      title: "о",
      highlight: "нас",
      descriptionLine1: "foxgirls.org — маленькая \"команда\" разработчиков.",
      descriptionLine2: "Просто друзья, объединенные говнокодом и лисодевочками.",
      features: [
        {
          title: "Открытый код",
          description: "(Почти) все наши проекты с открытым исходным кодом и доступны каждому.",
        },
        {
          title: "Независимые",
          description: "Мы самофинансируемая команда без корпоративного влияния, делаем то, что любим.",
        },
        {
          title: "Уверовали",
          description: "Мы верим в превосходство лисодевочек.",
        },
      ],
    },
    projects: {
      title: "наши",
      highlight: "проекты",
      subtitle: "",
      items: [
        {
          type: "команда",
          description: "Наша команда перевода манги. Качественный перевод, клининг и тайпсеттинг.",
        },
        {
          type: "API",
          description: "API, полное лисодевочек.",
        },
      ],
    },
    team: {
      title: "наша",
      highlight: "команда",
      telegram: "Telegram",
      email: "Email",
      website: "Сайт",
    },
    socials: {
      title: "Платформы и соцсети",
      items: [
        { description: "Канал" },
        { description: "Open Source" },
      ],
    },
  },
  uk: {
    navbar: {
      home: "Головна",
      about: "Про нас",
      projects: "Проєкти",
      team: "Команда",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
      languageSwitcherLabel: "Оберіть мову",
      english: "English",
      russian: "Русский",
      ukrainian: "Українська",
    },
    hero: {
      scrollDown: "Прокрутити вниз",
    },
    about: {
      title: "про",
      highlight: "нас",
      descriptionLine1: "foxgirls.org — маленька \"команда\ розробників",
      descriptionLine2: "Просто друзі, об'єднані говнокодом та аніме лисотяночками.",
      features: [
        {
          title: "Відкритий код",
          description: "(Майже) усі наші проєкти з відкритим кодом і доступні кожному.",
        },
        {
          title: "Незалежні",
          description: "Ми самофінансована команда без корпоративного впливу, будуємо те, що любимо.",
        },
        {
          title: "Увірували",
          description: "Ми віримо у верховенство лисотяночок.",
        },
      ],
    },
    projects: {
      title: "наші",
      highlight: "проєкти",
      subtitle: "",
      items: [
        {
          type: "команда",
          description: "Наша команда перекладу манги. Якісний переклад, клінінг та тайпсеттинг.",
        },
        {
          type: "API",
          description: "API, повне лисодівчат.",
        },
      ],
    },
    team: {
      title: "наша",
      highlight: "команда",
      telegram: "Telegram",
      email: "Email",
      website: "Вебсайт",
    },
    socials: {
      title: "Платформи й соцмережі",
      items: [
        { description: "Канал" },
        { description: "Open Source" },
      ],
    },
  },
};

function parseLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  return LOCALES.includes(normalized as Locale) ? (normalized as Locale) : null;
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const key = `${name}=`;
  const pairs = document.cookie.split(";");

  for (const pair of pairs) {
    const trimmed = pair.trim();
    if (trimmed.startsWith(key)) {
      return decodeURIComponent(trimmed.slice(key.length));
    }
  }

  return null;
}

function writeCookie(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
}

function detectDefaultLocale(): Locale {
  if (typeof navigator === "undefined") return "ru";

  const candidates = [navigator.language, ...(navigator.languages ?? [])];
  const hasUkrainian = candidates.some((entry) => entry.toLowerCase().startsWith("uk"));
  return hasUkrainian ? "uk" : "ru";
}

function resolveInitialLocale(): Locale {
  const fromCookie = parseLocale(readCookie(LOCALE_COOKIE_NAME));
  if (fromCookie) return fromCookie;

  const fallback = detectDefaultLocale();
  writeCookie(LOCALE_COOKIE_NAME, fallback);
  return fallback;
}

export const locale = writable<Locale>(resolveInitialLocale());

locale.subscribe((value) => {
  writeCookie(LOCALE_COOKIE_NAME, value);
});

export const t = derived(locale, ($locale) => messages[$locale]);
