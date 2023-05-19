porcentagem = float(input("Digite a porcentagem do IPI:"))

codigoPeca1 = int(input("Digite o código da peça 1:"))
valorUnitario1 = float(input("Digite o valor unitário da peça 1:"))
quantidade1 = int(input("Digite a quantidade de peças 1:"))

codigoPeca2 = int(input("Digite o código da peça 2:"))
valorUnitario2 = float(input("Digite o valor unitário da peça 2:"))
quantidade2 = int(input("Digite a quantidade de peças 2:"))

valorTotal = (valorUnitario1 * quantidade1 + valorUnitario2 * quantidade2) * (porcentagem / 100 + 1)

print(f"O valor total a ser pago é de: R$ {valorTotal:.2f}")
