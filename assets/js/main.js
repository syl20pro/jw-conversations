let btn = document.getElementById('btn');
let output = document.getElementById('output');
let suggestion = [
    'Dieu écoute-​t-​il les prières ?	Ps 65:2',
    'À propos de quoi pouvons-​nous prier ?	1J 5:14',
    'Où pouvons-​nous trouver des conseils pour être heureux ?	Ps 1:1,2',
    'Quel effet l’amour de l’argent et des biens matériels peut-​il avoir sur notre bonheur ?	1Tm 6:9, 10',
    'Qu’est-​ce que le royaume de Dieu ?	Mt 6:9, 10',
    'Qu’accomplira le royaume de Dieu ?	Mt 14:19, 20',
    'La Bible est-​elle en phase avec notre époque ?	2Tm 3:16',
    'La Bible est-​elle compatible avec la science ?	Jb 26:7',
    'Quel intérêt Dieu porte-​t-​il à ceux qui le recherchent sincèrement ?	1P 5:6, 7',
    'À quel point Dieu se soucie-​t-​il de chacun de nous ?	Mt 10:29-31',
    'Qu’est-​ce qui peut nous aider à faire face à la mort d’un proche ?	2Co 1:3, 4',
    'Que se passe-​t-​il après la mort ?	Ec 9:5',
    'Comment savons-​nous que nos souffrances ne sont pas une punition de Dieu ?	Jb 34:10b',
    'Pourquoi souffrons-​nous ?	1J 5:19',
    'Pensez-​vous que la fin du monde est pour bientôt ?	2Tm 3:1-5',
    'Que se passera-​t-​il après « les derniers jours » ?	Ré 21:3, 4',
    'Que se passe-​t-​il quand on meurt ?	Ec 9:5a',
    'Peut-​on espérer que les morts revivent ?	Jb 14:14, 15',
    'Comment sera la vie sur terre quand Dieu ressuscitera nos chers disparus ?	Is 32:18',
    'Quel est le projet de Dieu pour les humains ?	Gn 1:28',
    'Comment sait-​on que Dieu accomplira son projet pour les humains ?	Is 55:11',
    'Comment sera la vie quand Dieu aura accompli son projet ?	Ps 37:10, 11',
    'Qui était Jésus ?	Mt 16:16',
    'Pourquoi Jésus est-​il mort ?	Mt 20:28',
    'Comment montrer notre reconnaissance pour la rançon payée grâce au sacrifice de Jésus ?	Jean 17:3',
    'Comment pouvons-​nous connaître l’avenir ?	Is 46:10',
    'Quelles prophéties de la Bible voyons-​nous se réaliser aujourd’hui ?	2Tm 3:1-5',
    'Quels bienfaits Dieu promet-​il pour l’avenir ?	Is 65:21-23',
    ];

btn.addEventListener('click', function(){
    var randomSuggestion = suggestion[Math.floor(Math.random() suggestion.length)]
    output.innerHTML = randomSuggestion;
})