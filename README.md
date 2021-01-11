# Introdução

No último processo seletivo, os nobres guerreiros da Commit Jr sofreram um revés ao ajudarem Emiyepfsi e Qoissi e perderam-se no espaço-tempo e estão presos na pré-história. Porém, estão cercados de criaturas muito estranhas e hostis, que querem devorá-los. Por sorte, um dos membros havia baixado um repositório do GitHub que se tratava de uma tentativa de construção de uma máquina do tempo.

Todavia, o código está longe de ficar pronto e está com um problema no cálculo do endereço cósmico da Terra. Sua tarefa é completar o código utilizando os princípios do SOLID para evitar uma catástrofe maior. Para isso considere as fórmulas abaixo para o cálculo do endereço cósmico da Terra:

## Dica
Todos os metodos que devem ser alterados tem o comentario com palavra CALC.
 - Dentro da pasta helpers tem 4 arquivos, todos tem 1 função que deve ser alterada
 - Dentro da paste service tem a pasta implementations, dentro dela tem uma classe com 3 métodos para serem preenchidos


```
TimeBalance = formula


```
![img-SpaceTime](http://www.sciweavers.org/upload/Tex2Img_1610217583/render.png)

![img-TimeDifferential](http://www.sciweavers.org/upload/Tex2Img_1610217692/render.png)

![img-SynchronizePulsars](http://www.sciweavers.org/upload/Tex2Img_1610216603/render.png)


```
SolarSystemPosition = formula
```
```
GalaxyPosition = formula
```
```
UniversePosition = formula
```

## O que é o SOLID?
O SOLID é um acrônimo para 5 princípios utilizados na programação orientada a objetos apresentado inicialmente pelo Robert “Uncle Bob” Martin em um artigo publicado no ano 2000. Dito isso, segue abaixo a lista dos princípios:

- **S**ingle-responsibility principle (Princípio de única responsabilidade);
- **O**pen–closed principle (Princípio de aberto/fechado);
- **L**iskov substitution principle (Princípio da substituição de Liskov);
- **I**nterface segregation principle (Princípio da segregação de Interface);
- **D**ependency inversion principle (Princípio da inversão de dependência).



### Single-responsibility principle (Princípio de única responsabilidade)
Basicamente, esse princípio diz que uma classe, componente, entidade ou funções devem ter uma única responsabilidade no código. A violação deste princípio aumenta a possibilidade de bugs por que mudar uma das responsabilidades pode afetar o todo.

![Single-responsibility principle](https://miro.medium.com/max/1000/1*P3oONz9Da3Tc1w97fMV73Q.png)

### Open–closed principle (Princípio de aberto/fechado)
Este princípio é um pouquinho mais polêmico que o anterior pois se mal interpretado pode parecer contradizê-lo. O princípio aberto/fechado diz que, uma classe, entidade, componente ou função deve estar aberta para extensões, porém fechadas para modificações.

![Open–closed principle](https://miro.medium.com/max/1000/1*0MtFBmm6L2WVM04qCJOZPQ.png)

### Liskov substitution principle (Princípio da substituição de Liskov)
Trata-se de um princípio introduzido por Barbara Liskov que diz que: se tivermos uma classe e se dela criarmos uma subclasse por herança, o objeto desta subclasse deve ser capaz de substituir a classe pai.

Este princípio sugere, basicamente, que não se deve fazer subclasses que gerem uma exceção na medida em que, um método definido na parte superior da árvore de herança deve ser funcional numa classe mais abaixo.

![Liskov substitution principle](https://miro.medium.com/max/1000/1*yKk2XKJaCLNlDxQMx1r55Q.png)

### Interface segregation principle (Princípio da segregação de Interface)
Este princípio diz que uma classe não deve implementar interfaces ou métodos que não serão utilizados.

![Interface segregation principle](https://miro.medium.com/max/1620/1*2hmyR9L43Vm64MYxj4Y89w.png)

### Dependency inversion principle (Princípio da inversão de dependência)
Este princípio diz que uma classe não deve ser presa com a “ferramenta” que ela usa. Ao invés disso, ela deve usar uma interface que permita conectar a ferramenta à classe.

![Dependency inversion principle](https://miro.medium.com/max/1000/1*Qk8tDmjQlyvwKxNTfXIo0Q.png)

##  *Referências:*
- [Medium](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
- [Filipe Deschamps](https://www.youtube.com/watch?v=6SfrO3D4dHM)
- [Código Fonte TV](https://www.youtube.com/watch?v=mkx0CdWiPRA)
