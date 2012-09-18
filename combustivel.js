function CombustivelCtrl($scope) {

    $scope.calcularRendimento = function() {
        
        if ($scope.rendimentoEtanol &&
            $scope.rendimentoGasolina &&
            $scope.precoEtanol &&
            $scope.precoGasolina) {

            var relacaoRendimento = $scope.rendimentoEtanol / $scope.rendimentoGasolina;

            $scope.relacao = relacaoRendimento;

            if ($scope.precoEtanol < $scope.precoGasolina * relacaoRendimento) {
                $scope.combustivelVantajoso = 'ETANOL';
            } else {
                $scope.combustivelVantajoso = 'GASOLINA';
            }

        } else {
            $scope.combustivelVantajoso = null;
        }
    };

}
