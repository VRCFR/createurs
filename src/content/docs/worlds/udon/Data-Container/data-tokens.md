---
title: "Jetons de données"
description: "A guide to Data Tokens in Udon"
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---

Les jetons de données stockent des données. Chaque jeton stocke une et une seule variable. Les jetons de données sont utilisés dans les [Dictionnaires de données](/worlds/udon/data-containers/data-dictionaries) et les [Listes de données](/worlds/udon/data-containers/data-lists).

Les jetons de données peuvent contenir les types de jeton suivants :

- Null
- Booléen
- SByte
- Byte
- Court
- UShort
- Int
- UInt
- Long
- ULong
- Flottant
- Double
- Chaîne de caractères
- Listes de données (stockent d'autres jetons de données)
- Dictionnaires de données (stockent d'autres jetons de données)
- Référence d'objet (capable de stocker **n'importe quoi** via l'encapsulation, mais ne peut pas être sérialisé)
- Erreurs de données (une énumération qui indique ce qui s'est mal passé)

## Propriétés

| Propriété       | Résultat                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TokenType      | Renvoie le TokenType actuel de la variable que contient ce DataToken                                                                                                                                                                                                                                           |
| EstNombre       | Renvoie vrai si le DataToken contient un type numérique quelconque. Sinon, renvoie faux.                                                                                                                                                                                                                               |
| EstNull         | Renvoie vrai si la valeur contenue dans ce DataToken est nulle sous n'importe quelle forme. Les nombres et les booléens ne sont jamais nuls, TokenType.Null est toujours nul, les chaînes de caractères vérifient la nullité mais pas la vacuité, et les références utilisent Utilities.IsValid en interne pour gérer les joueurs qui ont quitté et les objets qui ont été détruits. |
| Booléen        | Renvoie un booléen si le DataToken contient un booléen. Sinon, lance une exception.                                                                                                                                                                                                                                 |
| Nombre         | Renvoie un double si le DataToken contient n'importe quel type numérique. Sinon, lance une exception.                                                                                                                                                                                                                     |
| SByte          | Renvoie un sbyte signé de 8 bits si le DataToken contient un sbyte. Sinon, lance une exception.                                                                                                                                                                                                                |
| Byte           | Renvoie un byte non signé de 8 bits si le DataToken contient un byte. Sinon, lance une exception.                                                                                                                                                                                                                 |
| Court          | Renvoie un short signé de 16 bits si le DataToken contient un short, sbyte ou byte. Sinon, lance une exception.                                                                                                                                                                                                 |
| UShort         | Renvoie un ushort non signé de 16 bits si le DataToken contient un ushort ou un byte. Sinon, lance une exception.                                                                                                                                                                                                     |
| Int            | Renvoie un int signé de 32 bits si le DataToken contient un int, sbyte, byte, short ou ushort. Sinon, lance une exception.                                                                                                                                                                                     |
| UInt           | Renvoie un uint non signé de 32 bits si le DataToken contient un uint, byte ou ushort. Sinon, lance une exception.                                                                                                                                                                                                |
| Long           | Renvoie un long signé de 64 bits si le DataToken contient un long, sbyte, byte, short, ushort ou uint. Sinon, lance une exception.                                                                                                                                                                              |
| ULong          | Renvoie un ulong non signé de 64 bits si le DataToken contient un ulong, byte, ushort ou uint. Sinon, lance une exception.                                                                                                                                                                                        |
| Flottant          | Renvoie un flottant de 32 bits si le DataToken contient un flottant, sbyte, byte, short, ushort, int, uint, long ou ulong. Sinon, lance une exception.                                                                                                                                                                 |
| Double         | Renvoie un double de 32 bits si le DataToken contient un double ou tout autre type numérique. Sinon, lance une exception.                                                                                                                                                                                            |
| Chaîne de caractères         | Renvoie une chaîne de caractères si le DataToken contient une chaîne de caractères. Sinon, lance une exception.                                                                                                                                                                                                                             |
| Dictionnaire de données | Renvoie un dictionnaire de données si le DataToken contient un dictionnaire de données. Sinon, lance une exception.                                                                                                                                                                                                           |
| Liste de données       | Renvoie une liste de données si le DataToken contient une liste de données. Sinon, lance une exception.                                                                                                                                                                                                                       |
| Référence      | Renvoie une référence d'objet si le DataToken contient une référence d'objet. Sinon, lance une exception.                                                                                                                                                                                                       |
| Erreur          | Renvoie l'erreur associée à ce jeton. Sinon, renvoie DataError.None. Contrairement aux autres, l'accès à cette propriété ne lancera jamais d'exception. Si vous tentez d'accéder à Error depuis un jeton qui n'est pas une erreur, il renverra simplement DataError.None.                                                   |

## Fonctions

| Fonction    | Résultat                                                                                                                                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bitcast     | Réutilise les données existantes dans le DataToken mais change le type. Comme reinterpret_cast en C++, ou BitConverter en C#. Tronquera la valeur si le type de destination est plus petit que le type source, ou l'étendra à zéro si le type de destination est plus grand que le type source. Ne fonctionne que sur les types primitifs et renvoie une copie. |
| ToString    | Convertit le contenu du jeton en une chaîne de caractères. Contrairement à l'accès à la propriété String, cette fonction réussira toujours car elle utilisera la méthode ToString de la valeur sous-jacente.                                                                                                                                                                      |
| GetHashCode | Renvoie un hachage du contenu du jeton. Cela est principalement utilisé pour les opérations internes de clés de dictionnaire.                                                                                                                                                                                                                                 |
| CompareTo   | Compare ce jeton à un autre jeton, renvoyant -1 si l'autre jeton est plus grand, 0 s'ils sont égaux, et 1 si l'autre jeton est plus petit. Les conteneurs tels que les listes et les dictionnaires seront comparés par nombre d'éléments. Lors de la comparaison de deux jetons qui ne sont pas du même type et qui ne sont pas des valeurs numériques, ils utiliseront l'ordre de l'énumération TokenType. |

## Création de jetons de données

### UdonSharp

En UdonSharp, les DataTokens peuvent être créés "implicitement", ce qui signifie que lorsqu'une fonction demande un DataToken, vous n'avez pas besoin de faire `new DataToken(value)`. Au lieu de cela, vous pouvez simplement passer la valeur directement et cela créera automatiquement un DataToken pour vous.

```csharp title="Création de DataToken"
// Vous pourriez faire cela
DataToken _explicitFloat = new DataToken(5.3f);
DataToken _explicitInt = new DataToken(5);
DataToken _explicitString = new DataToken("valeur");
DataToken _explicitBool = new DataToken(true);

// Mais c'est plus facile et plus simple
DataToken _float = 5.3f;
DataToken _Int = 5;
DataToken _String = "valeur";
DataToken _Bool = true;
```

### Graphe Udon

Dans Udon Graph, vous devrez utiliser les nœuds `DataToken Implicit` ou `Constructeur DataToken` pour créer un DataToken avec la valeur à l'intérieur.  
![data-tokens-7GAcVrY.png](/img/worlds/data-tokens-7GAcVrY.png)

## Obtenir des valeurs à partir d'un jeton de données

Avant de récupérer une valeur à partir d'un DataToken, vous devez être sûr du type qu'il contient car si vous essayez de récupérer un type incompatible, cela arrêtera votre UdonBehaviour. Il existe plusieurs façons de s'assurer que le type contenu est compatible avec ce que vous voulez extraire.

- Vous pouvez vérifier la propriété `DataToken.TokenType` pour obtenir le type exact
- Lors de la récupération d'une valeur à partir d'une liste de données ou d'un dictionnaire de données, vous pouvez utiliser `TryGetValue` et spécifier un TokenType. Si le TokenType est incorrect, cette fonction renverra false.
- Vous pouvez vérifier la propriété `DataToken.IsNumber` pour voir s'il s'agit d'un nombre. Si c'est le cas, vous pouvez ensuite extraire en toute sécurité la propriété `Number`, qui vous donnera un double upcasté à partir du type réel. Cela peut perdre de la précision si le type était `long` ou `ulong`.
- Indépendamment du type du jeton, `ToString` est toujours une option valide et ne lancera jamais d'erreurs.

```csharp title="Récupération de DataToken en U#"
// Si nous savons que c'est une chaîne de caractères, nous pouvons extraire en toute sécurité la chaîne de caractères du jeton
if (unknownToken.TokenType == TokenType.String)
{
    Debug.Log(unknownToken.String);
}

// Nous pouvons utiliser IsNumber pour voir s'il s'agit d'un type de nombre, même si nous ne savons pas lequel.
if (unknownToken.IsNumber)
{
    Debug.Log(unknownToken.Number);
}

// Si nous extrayons une valeur d'un conteneur, nous pouvons utiliser la version qui effectue sa propre vérification de type
if (dictionary.TryGetValue("clé", TokenType.String, out DataToken value))
{
    Debug.Log(value.String);
}
```

![data-tokens-SqQqE5w.png](/img/worlds/data-tokens-SqQqE5w.png)

Une fois que vous êtes sûr d'avoir le bon type, vous pouvez obtenir la valeur du DataToken en accédant aux propriétés de valeur telles que `DataToken.Float` et `DataToken.Boolean`. Chaque type a sa propre propriété qui peut être utilisée pour extraire ce type spécifique.

Si vous avez un contrôle complet sur les données avec lesquelles vous travaillez, vous pouvez ignorer toutes les vérifications de TokenType et obtenir directement la valeur du jeton. Cela peut économiser un peu de code supplémentaire, mais assurez-vous de ne pas le faire si les données proviennent d'une source externe ou s'il existe une possibilité que le type puisse être autre chose.

```csharp title="Exemple de syntaxe abrégée entre crochets"
dictionary["A"] = 5;
dictionary["B"] = 10;

// Cette hypothèse est faite sur le fait qu'A et B contiendront toujours des entiers.
// C'est une hypothèse sûre à faire puisque nous les avons définis juste au-dessus dans un environnement contrôlé.
// Si les données proviennent d'une source externe, nous ne devrions pas faire ces hypothèses !
int somme = dictionary["A"].Int + dictionary["B"].Int;
```

## Erreurs

Lorsque les opérations sur une liste de données ou un dictionnaire de données échouent et renvoient un DataToken, elles produiront un jeton d'erreur. Les jetons d'erreur contiennent à la fois une énumération classifiant le type d'erreur, ainsi qu'une chaîne qui explique l'erreur de manière plus spécifique. Toutes les erreurs ne produiront pas de chaîne car il n'est pas nécessaire de donner plus de détails.

Si vous avez un jeton d'erreur, vous pouvez utiliser `DataToken.Error` pour obtenir l'énumération d'erreur et `DataToken.String` pour obtenir le message. Vous pouvez également utiliser `DataToken.ToString()` qui combinera automatiquement l'énumération et la chaîne en un message complet agréable qui contient à la fois l'

erreur et la raison de l'erreur.

Un jeton d'erreur peut être l'une des différentes choses suivantes :

| Valeur            | Signification                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CléInexistante  | Vous avez essayé d'accéder à une clé d'un dictionnaire de données mais cette clé n'existe pas                                                                                                                                       |
| IndexHorsLimite  | Vous avez essayé d'accéder à un index d'un tableau de données mais cet index était soit inférieur à 0, soit supérieur ou égal au nombre d'éléments du tableau.                                                                           |
| IncompatibilitéType     | Vous avez essayé d'accéder à une valeur mais la valeur n'était pas du type attendu. Notez que cela ne peut se produire que si vous utilisez une version de TryGetValue qui accepte un type.                                             |
| TypeNonPrisEnCharge  | Le conteneur de données avait un type qui n'est pas pris en charge par le format de sérialisation que vous avez essayé d'utiliser. Cela peut se produire si vous mettez des jetons de référence dans un conteneur de données et que vous essayez ensuite de le sérialiser en Json.        |
| ValeurNonPriseEnCharge | Le conteneur de données avait une valeur qui n'est pas prise en charge par le format de sérialisation que vous avez essayé d'utiliser. Cela peut se produire si vous mettez des flottants NaN ou Infinity dans un conteneur de données puis essayez de le sérialiser en Json. |
| ImpossibleDeParser    | Le format sérialisé n'a pas pu être analysé. Cela se produit si le Json source est invalide.                                                                                                                             |

```csharp title="TryGetValue avec TokenType"
if (dictionary.TryGetValue("clé", TokenType.Float out DataToken value)) {
    // Si TryGetValue réussit, nous pouvons faire des choses avec le jeton
    Debug.Log($"Valeur récupérée avec succès {token.Float}");
} else {
    // Si TryGetValue échoue, le jeton sera alors une erreur
    Debug.Log($"Impossible de récupérer la valeur avec l'erreur {token.Error}");
}
```

![data-tokens-zcqKePv.png](/img/worlds/data-tokens-zcqKePv.png)

## FAQ

### Quelle est la différence entre String et ToString ?

`DataToken.String` et `DataToken.ToString()` sont similaires mais pas tout à fait identiques, car `DataToken.String` accède spécifiquement à la valeur de chaîne à l'intérieur du DataToken, tandis que `DataToken.ToString()` convertit tout ce qui existe en une chaîne de caractères.

En conséquence, `ToString` est toujours valide quel que soit le contenu du DataToken et ne bloquera jamais votre UdonBehaviour. S'il contient un booléen, il vous donnera soit true soit false. S'il contient un nombre, il créera une représentation de chaîne de ce nombre en utilisant `ToString("G", CultureInfo.InvariantCulture)`.

D'autre part, l'accès à `DataToken.String` n'est valide que si le DataToken contient une chaîne de caractères. Si le DataToken contient un flottant et que vous tentez d'accéder à `DataToken.String`, alors une exception sera lancée et votre UdonBehaviour sera arrêté.

Les erreurs de données sont uniques en ce sens qu'elles contiennent à la fois une énumération d'erreur et une chaîne. Il est recommandé d'utiliser `ToString()` sur les erreurs de données simplement parce que `ToString()` combinera l'énumération et la chaîne en un seul message qui contient à la fois l'erreur et la raison de l'erreur.

### Pourquoi ne pas avoir un TryGetValue qui donne directement la valeur, en sautant les jetons ?

Il serait avantageux d'avoir une méthode TryGetValue qui fournit directement la valeur, en contournant le besoin de jetons. C'est une question valide car cela peut être fastidieux de récupérer constamment le jeton du conteneur, puis d'accéder séparément à la valeur dans le conteneur. Plusieurs options ont été envisagées pour simplifier ce processus, et l'une de ces solutions qui a été implémentée est d'inclure une vérification de type intégrée avec TryGetValue.

Une autre approche qui a été envisagée consistait à créer une version générique de TryGetValue où un type système est spécifié à l'aide d'un argument T. Bien que UdonSharp prenne en charge cette approche (du moins dans le cadre des méthodes statiques), Udon lui-même ne le fait pas. De plus, bien que cette option soit avantageuse, elle empêcherait le retour d'une DataError à travers le DataToken en cas d'erreur, ce qui entraînerait le retour de la valeur par défaut. Finalement, nous avons choisi de ne pas implémenter cette approche car elle dissimulerait l'erreur à l'utilisateur et rendrait plus difficile l'identification du problème. Heureusement, les utilisateurs ont la possibilité de créer leur propre solution pour la récupération de valeurs génériques en utilisant UdonSharp. Cela est rendu possible grâce à la disponibilité des génériques, des statiques et des méthodes d'extension dans UdonSharp.