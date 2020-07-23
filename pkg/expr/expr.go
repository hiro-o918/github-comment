package expr

import "github.com/antonmedv/expr"

type Expr struct{}

func (Expr) Match(expression string, params interface{}) (bool, error) {
	prog, err := expr.Compile(expression, expr.Env(params), expr.AsBool())
	if err != nil {
		return false, err
	}
	output, err := expr.Run(prog, params)
	if err != nil {
		return false, err
	}
	if f, ok := output.(bool); !ok || !f {
		return false, nil
	}
	return true, nil
}
