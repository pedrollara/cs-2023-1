rawIdade = input("Digite sua idade aaaa/mm/dd: ")

dias = int(rawIdade[8:10])
meses = int(rawIdade[5:7])
anos = int(rawIdade[0:4])

idadeEmDias = (anos * 365) + (meses * 30) + dias

print(idadeEmDias +  " dias")