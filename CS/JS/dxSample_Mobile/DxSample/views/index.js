DxSample.Index = function (params) {

    var viewModel = {
        viewShown: function () {
            $("#chartContainer").dxCircularGauge({
                scale: {
                    startValue: 0,
                    endValue: 60,
                    majorTick: {
                        tickInterval: 10
                    }
                },
                rangeContainer: {
                    backgroundColor: "none",
                    ranges: [
                        {
                            startValue: 0,
                            endValue: 20,
                            color: "#A6C567"
                        },
                        {
                            startValue: 20,
                            endValue: 40,
                            color: "#FCBB69"
                        },
                        {
                            startValue: 40,
                            endValue: 60,
                            color: "#E19094"
                        }
                    ]
                },
                needles: [{ value: 24 }],
                markers: [{ value: 5 }, { value: 17 }, { value: 43 }, { value: 55 }],
                commonMarkerSettings: {
                    text: {
                        customizeText: function () {
                            var result;
                            switch (this.value) {
                                case 5:
                                    result = 'Bad';
                                    break;
                                case 17:
                                    result = 'Not so good';
                                    break;
                                case 43:
                                    result = 'Fairly good';
                                    break;
                                case 55:
                                    result = 'Excellent';
                                    break;
                            }
                            return result;
                        }
                    }
                }
            });
        }
    };
  
    return viewModel;
};