// type BrandJA = '久保田' | '越乃寒梅' | '八海山' | '獺祭';
// type BrandFU = 'くぼた' | 'こしのかんばい' | 'はっかいさん' | 'だっさい';
// type BrandKO = '쿠보타' | '코시노칸바이' | '핫카이산' | '닷사이';
// type BrandEN = 'KUBOTA' | 'KOSHI NO KANBAI' | 'HAKKAISAN' | 'DASSAI';
// type BreweryJA = '朝日酒造' | '石本酒造' | '八海醸造' | '旭酒造';
// type BreweryKO = '아사히슈조' | '이시모토슈조' | '핫카이죠조' | '아사히주조';
// type LocationJA = '新潟県' | '山口';
// type LocationKO = '니가타' | '야마구치';

type BrandType = 'kubota' | 'koshi_no_kanbai' | 'hakkaisan' | 'dassai';

interface Brand {
  type: BrandType;
  name: {
    ja: string;
    fu: string;
    ko: string;
  };
  brewery: {
    ja: string;
    ko: string;
  };
  location: {
    ja: string;
    ko: string;
  };
  feature: string;
  links: {
    ja: string;
    ko?: string;
    en: string;
  };
}

const brandList: Brand[] = [
  {
    type: "kubota",
    name: {
      ja: "久保田",
      fu: "くぼた",
      ko: "쿠보타",
    },
    brewery: {
      ja: "朝日酒造",
      ko: "아사히슈조",
    },
    location: {
      ja: "新潟県",
      ko: "니가타",
    },
    feature: "처음으로 니혼슈를 접한다면 쿠보타를 마셔라라는 표현이 말해주듯, 사케마니아는 물론이고 일반인들에게가지 폭넓은 인지도를 자랑하는 브랜드입니다. 맛이 달고 무겁던 사케들이 주류를 이루던 1970년대, 깔끔하고 쌉싸름한 타입이 유행할 것이란 판단에 '쿠보타' 시리즈를 투입하여 시장에 진입, 본고장인 니이가타는 물론이고 전국에 그 맛과 명성을 떨쳤습니다.",
    links: {
      ja: "https://www.asahi-shuzo.co.jp/",
      en: "https://www.asahi-shuzo.co.jp/en/",
      ko: "https://www.asahi-shuzo.co.jp/kr/",
    },
  },
  {
    type: "koshi_no_kanbai",
    name: {
      ja: "越乃寒梅",
      fu: "こしのかんばい",
      ko: "코시노칸바이",
    },
    brewery: {
      ja: "石本酒造",
      ko: "이시모토슈조",
    },
    location: {
      ja: "新潟県",
      ko: "니가타",
    },
    feature: "지금은 흔한 개념이 되어버린 '지자케'. 즉 로컬 사케의 여명기를 견인하여 전국적인 지자케 붐으로 연결시킨 선구자이자 품질 최우선, 소량생산을 고집하여 처음으로 프리미엄이 붙어 거래된 사케가 바로 코시노칸바이입니다. 깔끔 쌉쌀함이라는 니가타 사케 특유의 바탕에 지나치지 않되 존재감 가득한 감칠맛을 곁들여 일찍부터 그 어느 양조장도 따라올 수 없는 고품질을 선보여, 정가보다 비싸게 거래됨에도 불구하고 소비자들에게 절대적인 지지를 받습니다.",
    links: {
      ja: "https://koshinokanbai.co.jp/",
      en: "https://koshinokanbai.com/",
    },
  },
  {
    type: "hakkaisan",
    name: {
      ja: "八海山",
      fu: "はっかいさん",
      ko: "핫카이산",
    },
    brewery: {
      ja: "八海醸造",
      ko: "핫카이죠조",
    },
    location: {
      ja: "新潟県",
      ko: "니가타",
    },
    feature: "일본 제일의 고시히카리 산지로 알려진 호설지대에서 빚어내는 니가타현을 대표하는 사케 '핫카이산'. 핫카이산은 굳은 의지로 일반 라인업의 품질을 조금이라도 개선하여 사케 표준을 높여가야 한다는 방침을 가지고 있으며 모든 보통주를 긴조 양조법으로, 모든 긴조슈는 다이긴조의 품질로, 다이긴조는 해를 거듭할수록 끝없는 최고 품질을 목표로 빚어내고 있습니다.",
    links: {
      ja: "https://www.hakkaisan.co.jp/",
      en: "https://www.hakkaisan.com/",
      ko: "https://www.hakkaisan.com/ko/",
    },
  },
  {
    type: "dassai",
    name: {
      ja: "獺祭",
      fu: "だっさい",
      ko: "닷사이",
    },
    brewery: {
      ja: "旭酒造",
      ko: "아사히주조",
    },
    location: {
      ja: "山口",
      ko: "야마구치",
    },
    feature: "생산하는 전 제품 최고의 주조미라고 알려진 야마다니시키를 사용한 준마이다이긴죠만을 고집하는 양조장으로, 니혼슈 본연의 향기를 살리기 위하여 압력을 가하지 않는 원심분리기 도입, 품질의 극대화를 도모하고 있는 브랜드입니다.",
    links: {
      ja: "https://www.asahishuzo.ne.jp/",
      en: "https://www.asahishuzo.ne.jp/en/",
    },
  },
];

export {
  BrandType,
  Brand,
  brandList,
};
