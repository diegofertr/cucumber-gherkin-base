Feature: Ya es viernes?
    Todos quieren saber cuando es Viernes

    Scenario Outline: Hoy es o no es Viernes
      Given hoy es "<day>"
      When pregunto si es Viernes
      Then me deberian decir "<answer>"

    Examples:
        | day | answer |
        | VIERNES  | TGIF |
        | DOMINGO  | NO |
        | LUNES  | NO |
        | MARTES  | NO |
        | MIERCOLES  | NO |
        | JUEVES  | NO |
