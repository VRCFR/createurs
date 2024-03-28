---
title: "Opérations sur les octets et les bits"
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---

# Opérations sur les octets et les bits

:::attention

Cette page décrit des concepts de niveau inférieur pour travailler avec des données binaires et est destinée aux créateurs avancés.
:::

Vous pouvez utiliser la méthode `Bitcast` sur les DataTokens pour effectuer des changements de type préservant la valeur ("casts non sécurisés") sur les types de données primitifs dans Udon.

Certaines classes standard de C# pour manipuler des données binaires brutes sont également disponibles, notamment `BitConverter` et `Buffer`.

## Exemple de code

```csharp title="Exemple d'opérations sur les octets et les bits, sérialiseur de base"
using System;
using System.Text;
using UdonSharp;
using UnityEngine;
using VRC.SDK3.Data;

public class BitConverterExample : UdonSharpBehaviour
{
    void Start()
    {
        // Créer des données de test
        int originalInt = 63;
        double originalDouble = 734531.433d;
        string originalString = "Test string";
        float[] originalFloatArray = new float[] { 543, 12.6f, 63.1231f };

        // Sérialiser puis désérialiser
        byte[] serialized = Serialize(originalInt, originalDouble, originalString, originalFloatArray);
        Deserialize(serialized, out int newInt, out double newDouble, out string newString, out float[] newFloatArray); 
        
        // Afficher les résultats pour voir si tout correspond
        Debug.Log($"{originalInt} - {newInt}");
        Debug.Log($"{originalDouble} - {newDouble}");
        Debug.Log($"{originalString} - {newString}");
        Debug.Log($"{originalFloatArray.Length} - {newFloatArray.Length}");
        for (int i = 0; i < originalFloatArray.Length && i < newFloatArray.Length; i++)
        {
            Debug.Log($"{originalFloatArray[i]} - {newFloatArray[i]}");
        }

        // Pour les valeurs individuelles, nous pouvons également utiliser le Bitcasting de DataToken pour obtenir un accès bit
        double doubleValue = 123.456d;
        DataToken doubleToken = new DataToken(doubleValue);
        // Nous avons utilisé ulong car il a la même taille qu'un double (8 octets)
        DataToken ulongToken = doubleToken.Bitcast(TokenType.ULong);
        DataToken resultDoubleToken = ulongToken.Bitcast(TokenType.Double);
        Debug.Log($"{doubleToken} - 0x{ulongToken:02X} - {resultDoubleToken}");
    }

    /// <summary>
    /// Une fonction exemple qui sérialise un ensemble prédéfini de données dans un tableau d'octets
    /// </summary>
    /// <param name="intValue">Entier qui sera encodé dans la sortie</param>
    /// <param name="doubleValue">Double qui sera encodé dans la sortie</param>
    /// <param name="stringValue">Chaîne qui sera encodée dans la sortie</param>
    /// <param name="floatArrayValues">Tableau de flottants qui sera encodé dans la sortie</param>
    /// <returns></returns>
    byte[] Serialize(int intValue, double doubleValue, string stringValue, float[] floatArrayValues)
    {
        int size = 0;
        byte[] intBytes = BitConverter.GetBytes(intValue); // Convertir l'entier en octets
        size += intBytes.Length;
        
        byte[] doubleBytes = BitConverter.GetBytes(doubleValue); // Convertir le double en octets
        size += doubleBytes.Length;
        
        byte[] stringBytes = Encoding.UTF8.GetBytes(stringValue); // Convertir la chaîne en octets
        size += stringBytes.Length;
        Debug.Log($"Longueur de la chaîne en octets {stringBytes.Length}");
        
        byte[] stringLengthBytes = BitConverter.GetBytes(stringBytes.Length); // Convertir la longueur de la chaîne en octets
        size += stringLengthBytes.Length;
        
        byte[] floatArrayLengthBytes = BitConverter.GetBytes(Buffer.ByteLength(floatArrayValues));
        size += floatArrayLengthBytes.Length;
        
        // Il n'est pas nécessaire de convertir le tableau de flottants en tableau d'octets car nous pouvons le copier directement
        size += Buffer.ByteLength(floatArrayValues);

        byte[] output = new byte[size]; // Allouer un tableau de la taille correcte qui devrait contenir tous nos éléments
        int offset = 0;

        Buffer.BlockCopy(intBytes, 0, output, offset, intBytes.Length); // Écrire l'entier - cela devrait prendre 4 octets
        offset += intBytes.Length; // Incrémenter l'offset pour que l'élément suivant écrive à l'emplacement correct
        
        Buffer.BlockCopy(doubleBytes, 0, output, offset, doubleBytes.Length); // Écrire le double - cela devrait prendre 8 octets
        offset += doubleBytes.Length;
        
        Buffer.BlockCopy(stringLengthBytes, 0, output, offset, stringLengthBytes.Length); // Écrire la longueur de la chaîne pour que le décodeur sache combien décoder - cela devrait prendre 4 octets
        offset += stringLengthBytes.Length;

        Buffer.BlockCopy(stringBytes, 0, output, offset, stringBytes.Length); // Écrire la chaîne - c'est variable, c'est pourquoi nous devons encoder la longueur de la chaîne ci-dessus
        offset += stringBytes.Length;

        Buffer.BlockCopy(floatArrayLengthBytes, 0, output, offset, floatArrayLengthBytes.Length); // Écrire la longueur du tableau de flottants pour que le décodeur sache combien décoder - cela devrait prendre 4 octets
        offset += floatArrayLengthBytes.Length;
        
        Buffer.BlockCopy(floatArrayValues, 0, output, offset, Buffer.ByteLength(floatArrayValues)); // Écrire le tableau de flottants - cela peut être fait directement sans conversion en tableau d'octets car c'est déjà un tableau
        offset += Buffer.ByteLength(floatArrayValues);
        
        Debug.Log($"Données encodées sur {output.Length} octets");
        return output;
    }

    /// <summary>
    /// Une fonction exemple qui désérialise un ensemble prédéfini de données décrites dans la fonction Serialize ci-dessus
    /// </summary>
    /// <param name="input">Octets d'entrée - doit être formaté de la manière attendue par la fonction Serialize ci-dessus</param>
    /// <param name="intValue">Valeur int en sortie désérialisée des données à l'intérieur de l'entrée</param>
    /// <param name="

doubleValue">Valeur double en sortie désérialisée des données à l'intérieur de l'entrée</param>
    /// <param name="stringValue">Valeur de chaîne en sortie désérialisée des données à l'intérieur de l'entrée</param>
    /// <param name="floatArrayValues">Valeur de tableau de flottants en sortie désérialisée des données à l'intérieur de l'entrée</param>
    /// <returns></returns>
    bool Deserialize(byte[] input, out int intValue, out double doubleValue, out string stringValue, out float[] floatArrayValues)
    {
        int offset = 0;
        
        intValue = BitConverter.ToInt32(input, offset);
        offset += 4; // Incrémenter l'offset pour que l'élément suivant lise à partir de l'emplacement correct. Les int devraient être longs de 4 octets
        
        doubleValue = BitConverter.ToDouble(input, offset);
        offset += 8; // Les doubles devraient être longs de 8 octets
        
        int stringLength = BitConverter.ToInt32(input, offset);
        offset += 4; // La longueur de la chaîne est un int, qui devrait être long de 4 octets
        
        Debug.Log($"Décodage de la longueur de la chaîne {stringLength} à l'offset {offset} pour une longueur de buffer {input.Length}");
        stringValue = Encoding.UTF8.GetString(input, offset, stringLength);
        offset += stringLength; // Les chaînes ont une longueur variable

        int floatArrayByteLength = BitConverter.ToInt32(input, offset);
        offset += 4; // La longueur du tableau de flottants est un int, qui devrait être long de 4 octets
        
        floatArrayValues = new float[floatArrayByteLength / 4]; // Créer un nouveau tableau de flottants de la bonne taille pour recevoir les données
        Buffer.BlockCopy(input, offset, floatArrayValues, 0, floatArrayByteLength); // Copier les données de l'entrée dans le tableau de flottants
        
        return true;
    }
}
```
