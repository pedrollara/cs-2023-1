def calculaMedia(numeros):
    soma = 0
    for numero in numeros:
        soma += numero
    return soma / len(numeros)


print(f"{calculaMedia([8,9,7])}")
print(f"{calculaMedia([4,5,6])}")
print(f"{calculaMedia([8,9,7]) + calculaMedia([4,5,6])}")
print(f"{calculaMedia([calculaMedia([8,9,7]),calculaMedia([4,5,6])])}")
