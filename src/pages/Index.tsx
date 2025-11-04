import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const coaches = [
    {
      name: 'Пеп Гвардиола',
      description: 'Революционер тактики, создатель "тики-таки". Выиграл всё возможное с Барселоной и Манчестер Сити.',
      achievements: '31 трофей',
    },
    {
      name: 'Карло Анчелотти',
      description: 'Мастер кубковых турниров. Единственный тренер, выигравший Лигу чемпионов 4 раза.',
      achievements: '4× Лига Чемпионов',
    },
    {
      name: 'Юрген Клопп',
      description: 'Создатель "тяжёлого металла" в футболе. Возродил величие Ливерпуля.',
      achievements: 'Лига Чемпионов, АПЛ',
    },
  ];

  const matches = [
    {
      title: 'Барселона 6:1 ПСЖ',
      year: '2017',
      description: 'Невероятный comeback в Лиге чемпионов. Барселона отыграла 0:4 и прошла дальше!',
    },
    {
      title: 'Ливерпуль 4:0 Барселона',
      year: '2019',
      description: 'Легендарный вечер на Энфилде. Ливерпуль совершил чудо в полуфинале ЛЧ.',
    },
    {
      title: 'Германия 1:7 Бразилия',
      year: '2014',
      description: 'Историческое унижение на ЧМ. Германия разгромила Бразилию на их поле.',
    },
  ];

  const stadiums = [
    {
      name: 'Камп Ноу',
      capacity: '99,354',
      location: 'Барселона, Испания',
    },
    {
      name: 'Уэмбли',
      capacity: '90,000',
      location: 'Лондон, Англия',
    },
    {
      name: 'Сантьяго Бернабеу',
      capacity: '81,044',
      location: 'Мадрид, Испания',
    },
  ];

  const goals = [
    {
      player: 'Лионель Месси',
      description: 'Сольный проход через всю команду Хетафе',
      year: '2007',
    },
    {
      player: 'Зинедин Зидан',
      description: 'Удар с лёта в финале Лиги чемпионов',
      year: '2002',
    },
    {
      player: 'Роналдиньо',
      description: 'Гол через себя против Вильярреала',
      year: '2006',
    },
  ];

  const ronaldoStats = [
    { label: 'Голов в карьере', value: '850+' },
    { label: 'Золотых мячей', value: '5' },
    { label: 'Лиг Чемпионов', value: '5' },
    { label: 'Голов головой', value: '140+' },
  ];

  const whyWeLove = [
    {
      icon: 'Heart',
      title: 'Эмоции',
      description: 'Футбол дарит миллионы эмоций: от радости до отчаяния. Каждый матч — это история.',
    },
    {
      icon: 'Users',
      title: 'Единство',
      description: 'Он объединяет людей всех возрастов, национальностей и социальных слоёв.',
    },
    {
      icon: 'Trophy',
      title: 'Драма',
      description: 'Непредсказуемость результата. Андердог может победить фаворита в любой момент.',
    },
    {
      icon: 'Zap',
      title: 'Красота игры',
      description: 'Филигранные пасы, невероятные голы, тактическое мастерство — всё это искусство.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">ФУТБОЛ</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'why', label: 'Почему?' },
                { id: 'coaches', label: 'Тренеры' },
                { id: 'matches', label: 'Матчи' },
                { id: 'goals', label: 'Голы' },
                { id: 'stadiums', label: 'Стадионы' },
                { id: 'ronaldo', label: 'Роналду' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/7ee5b85f-0e5e-4a7b-80d0-d571ec0d46c8/files/9b2b35df-241c-4376-b668-707a6e97166d.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              ВЕЛИЧИЕ ФУТБОЛА
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              Игра, которая объединяет миллиарды людей по всему миру
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('why')}
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6"
            >
              Узнать почему мы любим футбол
              <Icon name="ChevronDown" size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="why" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
            Почему мы любим футбол? ⚽
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWeLove.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon name={item.icon} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Icon name="Lightbulb" size={48} className="text-secondary" />
            <h2 className="text-5xl font-black text-gray-900">Великие тренеры</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Award" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{coach.name}</h3>
                    <p className="text-secondary font-bold text-lg mb-4">{coach.achievements}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{coach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="matches" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Icon name="Flame" size={48} className="text-accent" />
            <h2 className="text-5xl font-black text-gray-900">Легендарные матчи</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {matches.map((match, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:translate-x-4 border-l-4 border-l-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-black text-gray-900">{match.title}</h3>
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                          {match.year}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{match.description}</p>
                    </div>
                    <Icon name="Sparkles" size={32} className="text-accent ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="goals" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Icon name="Target" size={48} className="text-accent" />
            <h2 className="text-5xl font-black text-gray-900">Нарезка величайших голов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-rotate-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-accent to-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-3xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{goal.player}</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">{goal.description}</p>
                  <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-bold">
                    {goal.year}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stadiums" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Icon name="Building2" size={48} className="text-secondary" />
            <h2 className="text-5xl font-black text-gray-900">Футбольные храмы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stadiums.map((stadium, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-6">
                    <Icon name="MapPin" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">{stadium.name}</h3>
                  <p className="text-secondary font-bold text-xl mb-3">{stadium.capacity}</p>
                  <p className="text-gray-600 flex items-center justify-center gap-2">
                    <Icon name="Globe" size={20} />
                    {stadium.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ronaldo"
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/7ee5b85f-0e5e-4a7b-80d0-d571ec0d46c8/files/f07f3af5-542d-4ec4-981d-be6fc98934b4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight animate-fade-in">
              КРИШТИАНУ РОНАЛДУ
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Один из величайших футболистов всех времён. Его имя навсегда вписано в историю футбола золотыми буквами. 
              Трудолюбие, самоотдача и невероятная целеустремлённость сделали его легендой.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {ronaldoStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-black text-primary mb-2">{stat.value}</p>
                    <p className="text-sm font-bold text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <blockquote className="border-l-4 border-primary pl-6 text-xl text-white/90 italic animate-fade-in" style={{ animationDelay: '0.4s' }}>
              "Ваша любовь делает меня сильнее. Ваша ненависть делает меня неудержимым."
              <span className="block mt-2 text-primary font-bold not-italic">— Криштиану Роналду</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 animate-fade-in">Вывод</h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Футбол — это больше, чем просто игра. Это страсть, эмоции, единство и история. 
            Он учит нас никогда не сдаваться, бороться до последней секунды и верить в чудеса.
          </p>
          <p className="text-3xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Вот почему мы любим футбол! ⚽❤️
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Trophy" size={32} className="text-primary" />
            <p className="text-xl font-bold">ФУТБОЛ — ИГРА ЖИЗНИ</p>
          </div>
          <p className="text-gray-400">© 2024 Создано с любовью к футболу</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
