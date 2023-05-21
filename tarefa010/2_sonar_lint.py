def calcula_media(numeros):
    soma = 0
    for numero in numeros:
        soma += numero
    return soma / len(numeros)


print(f"{calcula_media([8,9,7])}")
print(f"{calcula_media([4,5,6])}")
print(f"{calcula_media([8,9,7]) + calcula_media([4,5,6])}")
print(f"{calcula_media([calcula_media([8,9,7]),calcula_media([4,5,6])])}")
