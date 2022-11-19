
import * as pt from "pareto-core-types"

export type __interfaces_T = {
    readonly "interface": __interface_definition_T
}

export type __interface_T = {
    readonly "interface": __interface_definition_T
}

export type __void_T = {
}

export type __return_type_TU =
    | ["interface", __interface_T]
    | ["void", __void_T]

export type __builder_procedure_declaration_T = {
    readonly "interfaces": pt.Dictionary<__interfaces_T>
    readonly "return type": __return_type_TU
}

export type __steps_T = {
    readonly "property": string
}

export type __context_selection_T = {
    readonly "start": __context_start_T
    readonly "steps": pt.Array<__steps_T>
}

export type __context_T = {
}

export type __argument_T = {
    readonly "function": string
}

export type __local_function_T = {
    readonly "function": string
}

export type __context_TU =
    | ["argument", __argument_T]
    | ["local function", __local_function_T]

export type __function_T = {
    readonly "argument": __type_expression_T
    readonly "context": __context_TU
}

export type __marked_value_T = {
    readonly "marker": string
}

export type __state_T = {
    readonly "state": string
}

export type __start_TU =
    | ["context", __context_T]
    | ["function", __function_T]
    | ["marked value", __marked_value_T]
    | ["state", __state_T]

export type __context_start_T = {
    readonly "start": __start_TU
}

export type __function_declaration_T = {
    readonly "in": __type_reference_T
    readonly "out": __type_reference_T
}

export type __steps_guaranteed_context_selection_T = {
    readonly "missing handler": __missing_handler_T
    readonly "property": string
}

export type __guaranteed_context_selection_T = {
    readonly "missing handler": __missing_handler_T
    readonly "start": __context_start_T
    readonly "steps": pt.Array<__steps_guaranteed_context_selection_T>
}

export type __dictionary_T = {
    readonly "entry": __interface_definition_T
}

export type __members_T = {
    readonly "definition": __interface_definition_T
}

export type __group_T = {
    readonly "members": pt.Dictionary<__members_T>
}

export type __interface_return_type_T = {
    readonly "interface": __interface_definition_T
}

export type __void_return_type_T = {
}

export type __return_type_method_TU =
    | ["interface", __interface_return_type_T]
    | ["void", __void_return_type_T]

export type __method_T = {
    readonly "return type": __return_type_method_TU
    readonly "type": __type_reference_T
}

export type __reference_T = {
    readonly "interface": string
    readonly "namespace selection": __namespace_selection_T
}

export type __type_TU =
    | ["dictionary", __dictionary_T]
    | ["group", __group_T]
    | ["method", __method_T]
    | ["reference", __reference_T]

export type __interface_definition_T = {
    readonly "type": __type_TU
}

export type __argument_type_T = {
    readonly "argument": string
}

export type __entries_T = {
    readonly "expression": __interface_expression_T
}

export type __dictionary_type_T = {
    readonly "entries": pt.Dictionary<__entries_T>
}

export type __members_inline_T = {
    readonly "expression": __interface_expression_T
}

export type __inline_T = {
    readonly "members": pt.Dictionary<__members_inline_T>
}

export type __strategy_TU =
    | ["inline", __inline_T]

export type __group_type_T = {
    readonly "strategy": __strategy_TU
}

export type __argument_strategy_T = {
    readonly "argument": string
}

export type __inline_procedure_T = {
    readonly "call": __procedure_call_T
    readonly "specification": __internal_procedure_specification_T
}

export type __procedure_implementation_T = {
    readonly "block": __procedure_block_T
}

export type __strategy_method_TU =
    | ["argument", __argument_strategy_T]
    | ["inline procedure", __inline_procedure_T]
    | ["procedure implementation", __procedure_implementation_T]

export type __method_type_T = {
    readonly "strategy": __strategy_method_TU
}

export type __procedure_call6_T = {
    readonly "procedure call": __named_procedure_call_T
}

export type __strategy_reference_TU =
    | ["procedure call6", __procedure_call6_T]

export type __reference_type_T = {
    readonly "strategy": __strategy_reference_TU
}

export type __type_initialize_TU =
    | ["dictionary", __dictionary_type_T]
    | ["group", __group_type_T]
    | ["method", __method_type_T]
    | ["reference", __reference_type_T]

export type __initialize_T = {
    readonly "type": __type_initialize_TU
}

export type __type_interface_expression_TU =
    | ["argument", __argument_type_T]
    | ["initialize", __initialize_T]

export type __interface_expression_T = {
    readonly "type": __type_interface_expression_TU
}

export type __members_group_T = {
    readonly "definition": __interface_definition_T
}

export type __group_type_parameters_T = {
    readonly "members": pt.Dictionary<__members_group_T>
}

export type __interface_return_type_method_T = {
    readonly "interface": __interface_definition_T
}

export type __void_return_type_method_T = {
}

export type __return_type_method_type_TU =
    | ["interface", __interface_return_type_method_T]
    | ["void", __void_return_type_method_T]

export type __method_type_parameters_T = {
    readonly "return type": __return_type_method_type_TU
    readonly "type": __nested_type_reference_T
}

export type __reference_type_parameters_T = {
    readonly "interface": string
    readonly "namespace selection": __namespace_selection_T
}

export type __type_parameters_TU =
    | ["group", __group_type_parameters_T]
    | ["method", __method_type_parameters_T]
    | ["reference", __reference_type_parameters_T]

export type __parameters_T = {
    readonly "type": __type_parameters_TU
}

export type __interface_return_type_internal_procedure_specification_T = {
    readonly "interface": __interface_definition_T
}

export type __void_return_type_internal_procedure_specification_T = {
}

export type __return_type_internal_procedure_specification_TU =
    | ["interface", __interface_return_type_internal_procedure_specification_T]
    | ["void", __void_return_type_internal_procedure_specification_T]

export type __internal_procedure_specification_T = {
    readonly "block": __procedure_block_T
    readonly "parameters": pt.Dictionary<__parameters_T>
    readonly "return type": __return_type_internal_procedure_specification_TU
}

export type __no_T = {
    readonly "on missing": __type_expression_T
}

export type __yes_T = {
}

export type __guaranteed_TU =
    | ["no", __no_T]
    | ["yes", __yes_T]

export type __missing_handler_T = {
    readonly "guaranteed": __guaranteed_TU
}

export type __external_T = {
    readonly "builder": string
    readonly "method": string
}

export type __local_T = {
    readonly "procedure": string
}

export type __type_named_procedure_call_TU =
    | ["external", __external_T]
    | ["local", __local_T]

export type __named_procedure_call_T = {
    readonly "procedure call": __procedure_call_T
    readonly "type": __type_named_procedure_call_TU
}

export type __type_arguments_T = {
    readonly "type": string
}

export type __namespace_reference_T = {
    readonly "namespace": string
    readonly "type arguments": pt.Dictionary<__type_arguments_T>
}

export type __current_T = {
}

export type __other_T = {
    readonly "namespace reference": __namespace_reference_T
}

export type __which_TU =
    | ["current", __current_T]
    | ["other", __other_T]

export type __namespace_selection_T = {
    readonly "which": __which_TU
}

export type __dictionary_type_steps_T = {
}

export type __group_type_steps_T = {
    readonly "property": string
}

export type __list_T = {
}

export type __tagged_union_option_T = {
    readonly "option": string
}

export type __type_steps_TU =
    | ["dictionary", __dictionary_type_steps_T]
    | ["group", __group_type_steps_T]
    | ["list", __list_T]
    | ["tagged union option", __tagged_union_option_T]

export type __steps_nested_type_reference_T = {
    readonly "type": __type_steps_TU
}

export type __nested_type_reference_T = {
    readonly "namespace reference": __namespace_reference_T
    readonly "steps": pt.Array<__steps_nested_type_reference_T>
    readonly "type": string
}

export type __external_interface_call_T = {
    readonly "expression": __type_expression_T
    readonly "interface": string
}

export type __internal_interface_call_T = {
    readonly "expression": __type_expression_T
    readonly "interface": string
}

export type __add_entry_T = {
    readonly "expression": __type_expression_T
    readonly "key": __string_expression_T
}

export type __strategy_dictionary_TU =
    | ["add entry", __add_entry_T]

export type __dictionary_type_state_change_T = {
    readonly "strategy": __strategy_dictionary_TU
}

export type __add_element_T = {
    readonly "expression": __type_expression_T
}

export type __strategy_list_TU =
    | ["add element", __add_element_T]

export type __list_type_T = {
    readonly "strategy": __strategy_list_TU
}

export type __string_T = {
    readonly "initializer": __string_expression_T
}

export type __type4_T = {
    readonly "expression": __type_expression_T
}

export type __type_state_change_TU =
    | ["dictionary", __dictionary_type_state_change_T]
    | ["list", __list_type_T]
    | ["string", __string_T]
    | ["type4", __type4_T]

export type __state_change_T = {
    readonly "state": string
    readonly "type": __type_state_change_TU
}

export type __type_effects_TU =
    | ["external interface call", __external_interface_call_T]
    | ["internal interface call", __internal_interface_call_T]
    | ["state change", __state_change_T]

export type __effects_T = {
    readonly "type": __type_effects_TU
}

export type __markers_T = {
    readonly "selection": __context_selection_T
}

export type __nested_procedures_T = {
    readonly "specification": __internal_procedure_specification_T
}

export type __interface_return_value_T = {
    readonly "expression": __interface_expression_T
}

export type __void_return_value_T = {
}

export type __return_value_TU =
    | ["interface", __interface_return_value_T]
    | ["void", __void_return_value_T]

export type __dictionary_type_states_T = {
    readonly "type": __nested_type_reference_T
}

export type __list_type_states_T = {
    readonly "type": __nested_type_reference_T
}

export type __string_type_T = {
    readonly "initial value": string
}

export type __type5_T = {
    readonly "expression": __type_expression_T
    readonly "nested type": __nested_type_reference_T
}

export type __type_states_TU =
    | ["dictionary", __dictionary_type_states_T]
    | ["list", __list_type_states_T]
    | ["string", __string_type_T]
    | ["type5", __type5_T]

export type __states_T = {
    readonly "type": __type_states_TU
}

export type __procedure_block_T = {
    readonly "effects": pt.Array<__effects_T>
    readonly "markers": pt.Dictionary<__markers_T>
    readonly "nested procedures": pt.Dictionary<__nested_procedures_T>
    readonly "return value": __return_value_TU
    readonly "states": pt.Dictionary<__states_T>
}

export type __interface_arguments_T = {
    readonly "expression": __interface_expression_T
}

export type __procedure_call_T = {
    readonly "interface arguments": pt.Dictionary<__interface_arguments_T>
}

export type __type_parameters_T = {
}

export type __function_implementations_T = {
    readonly "block": __type_expression_block_T
    readonly "declaration": string
    readonly "namespace reference": __namespace_reference_T
    readonly "type parameters": pt.Dictionary<__type_parameters_T>
}

export type __function_declarations_T = {
    readonly "declaration": __function_declaration_T
}

export type __methods_T = {
    readonly "declaration": __builder_procedure_declaration_T
}

export type __interface_builders_T = {
    readonly "methods": pt.Dictionary<__methods_T>
}

export type __interfaces_namespaces_T = {
    readonly "definition": __interface_definition_T
}

export type __builders_T = {
    readonly "builder": string
    readonly "namespace selection": __namespace_selection_T
}

export type __functions_T = {
    readonly "declaration": __function_declaration_T
}

export type __interfaces_procedure_declarations_T = {
    readonly "interface": __interface_definition_T
}

export type __interface_return_type_procedure_declarations_T = {
    readonly "interface": __interface_definition_T
}

export type __void_return_type_procedure_declarations_T = {
}

export type __return_type_procedure_declarations_TU =
    | ["interface", __interface_return_type_procedure_declarations_T]
    | ["void", __void_return_type_procedure_declarations_T]

export type __procedure_declarations_T = {
    readonly "builders": pt.Dictionary<__builders_T>
    readonly "context": __type_reference_T
    readonly "functions": pt.Dictionary<__functions_T>
    readonly "interfaces": pt.Dictionary<__interfaces_procedure_declarations_T>
    readonly "return type": __return_type_procedure_declarations_TU
}

export type __type_parameters_namespaces_T = {
}

export type __types_T = {
    readonly "type": __type_T
}

export type __namespaces_T = {
    readonly "function declarations": pt.Dictionary<__function_declarations_T>
    readonly "interface builders": pt.Dictionary<__interface_builders_T>
    readonly "interfaces": pt.Dictionary<__interfaces_namespaces_T>
    readonly "procedure declarations": pt.Dictionary<__procedure_declarations_T>
    readonly "type parameters": pt.Dictionary<__type_parameters_namespaces_T>
    readonly "types": pt.Dictionary<__types_T>
}

export type __type_parameters_procedure_implementations_T = {
}

export type __procedure_implementations_T = {
    readonly "block": __procedure_block_T
    readonly "declaration": string
    readonly "namespace reference": __namespace_reference_T
    readonly "type parameters": pt.Dictionary<__type_parameters_procedure_implementations_T>
}

export type __root_T = {
    readonly "function implementations": pt.Dictionary<__function_implementations_T>
    readonly "namespaces": pt.Dictionary<__namespaces_T>
    readonly "procedure implementations": pt.Dictionary<__procedure_implementations_T>
}

export type __literal_T = {
    readonly "value": string
}

export type __select_T = {
    readonly "context": __context_selection_T
}

export type __state_strategy_T = {
    readonly "state": string
}

export type __strategy_string_expression_TU =
    | ["literal", __literal_T]
    | ["select", __select_T]
    | ["state", __state_strategy_T]

export type __string_expression_T = {
    readonly "strategy": __strategy_string_expression_TU
}

export type __optional_T = {
}

export type __required_T = {
}

export type __occurence_TU =
    | ["optional", __optional_T]
    | ["required", __required_T]

export type __boolean_T = {
}

export type __dictionary_type_type_T = {
    readonly "entry": __type_T
}

export type __properties_T = {
    readonly "type": __type_T
}

export type __group_type_type_T = {
    readonly "properties": pt.Dictionary<__properties_T>
}

export type __list_type_type_T = {
    readonly "element": __type_T
}

export type __number_T = {
}

export type __string_type_type_T = {
}

export type __options_T = {
    readonly "type": __type_T
}

export type __tagged_union_T = {
    readonly "options": pt.Dictionary<__options_T>
}

export type __type_argument_T = {
    readonly "argument": string
}

export type __type_reference_type_T = {
    readonly "type": __type_reference_T
}

export type __type_type_TU =
    | ["boolean", __boolean_T]
    | ["dictionary", __dictionary_type_type_T]
    | ["group", __group_type_type_T]
    | ["list", __list_type_type_T]
    | ["number", __number_T]
    | ["string", __string_type_type_T]
    | ["tagged union", __tagged_union_T]
    | ["type argument", __type_argument_T]
    | ["type reference", __type_reference_type_T]

export type __type_T = {
    readonly "occurence": __occurence_TU
    readonly "type": __type_type_TU
}

export type __copy_T = {
    readonly "context": __guaranteed_context_selection_T
}

export type __dictionary_from_state_T = {
    readonly "state": string
}

export type __boolean_type_T = {
    readonly "value": string
}

export type __dictionary_type_literal_T = {
}

export type __properties_group_T = {
    readonly "expression": __type_expression_T
}

export type __group_type_literal_T = {
    readonly "properties": pt.Dictionary<__properties_group_T>
}

export type __list_type_literal_T = {
}

export type __number_type_T = {
    readonly "value": string
}

export type __string_type_literal_T = {
    readonly "value": string
}

export type __tagged_union_type_T = {
    readonly "data": __type_expression_T
    readonly "option": string
}

export type __type_argument_type_T = {
}

export type __type_reference_type_literal_T = {
    readonly "expression": __type_expression_T
}

export type __type_literal_TU =
    | ["boolean", __boolean_type_T]
    | ["dictionary", __dictionary_type_literal_T]
    | ["group", __group_type_literal_T]
    | ["list", __list_type_literal_T]
    | ["number", __number_type_T]
    | ["string", __string_type_literal_T]
    | ["tagged union", __tagged_union_type_T]
    | ["type argument", __type_argument_type_T]
    | ["type reference", __type_reference_type_literal_T]

export type __literal_strategy_T = {
    readonly "type": __type_literal_TU
}

export type __map_T = {
    readonly "context": __guaranteed_context_selection_T
    readonly "entry": __type_expression_T
}

export type __options_switch_T = {
    readonly "expression": __type_expression_T
}

export type __switch_T = {
    readonly "context": __guaranteed_context_selection_T
    readonly "options": pt.Dictionary<__options_switch_T>
}

export type __strategy_type_expression_TU =
    | ["copy", __copy_T]
    | ["dictionary from state", __dictionary_from_state_T]
    | ["literal", __literal_strategy_T]
    | ["map", __map_T]
    | ["switch", __switch_T]

export type __type_expression_T = {
    readonly "strategy": __strategy_type_expression_TU
}

export type __functions_type_expression_block_T = {
    readonly "block": __type_expression_block_T
    readonly "declaration": __function_declaration_T
}

export type __type_expression_block_T = {
    readonly "expression": __type_expression_T
    readonly "functions": pt.Dictionary<__functions_type_expression_block_T>
}

export type __type_reference_T = {
    readonly "namespace selection": __namespace_selection_T
    readonly "type": string
}

export type __interfaces_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __interface_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_B = {
}

export type __return_type_TU_Builder =
    | ["interface", __interface_B]
    | ["void", __void_B]

export type __builder_procedure_declaration_B = {
    readonly "interfaces" ?: { [key:string]: __interfaces_B } //| (add: (key: string, entry: __interfaces_B ) => void )
    readonly "return type" ?: __return_type_TU_Builder
}

export type __steps_B = {
    readonly "property" ?: string
}

export type __context_selection_B = {
    readonly "start" ?: __context_start_B
    readonly "steps" ?: __steps_B[] //| { callback: (value: __steps_B ) => void }
}

export type __context_B = {
}

export type __argument_B = {
    readonly "function" ?: string
}

export type __local_function_B = {
    readonly "function" ?: string
}

export type __context_TU_Builder =
    | ["argument", __argument_B]
    | ["local function", __local_function_B]

export type __function_B = {
    readonly "argument" ?: __type_expression_B
    readonly "context" ?: __context_TU_Builder
}

export type __marked_value_B = {
    readonly "marker" ?: string
}

export type __state_B = {
    readonly "state" ?: string
}

export type __start_TU_Builder =
    | ["context", __context_B]
    | ["function", __function_B]
    | ["marked value", __marked_value_B]
    | ["state", __state_B]

export type __context_start_B = {
    readonly "start" ?: __start_TU_Builder
}

export type __function_declaration_B = {
    readonly "in" ?: __type_reference_B
    readonly "out" ?: __type_reference_B
}

export type __steps_guaranteed_context_selection_B = {
    readonly "missing handler" ?: __missing_handler_B
    readonly "property" ?: string
}

export type __guaranteed_context_selection_B = {
    readonly "missing handler" ?: __missing_handler_B
    readonly "start" ?: __context_start_B
    readonly "steps" ?: __steps_guaranteed_context_selection_B[] //| { callback: (value: __steps_guaranteed_context_selection_B ) => void }
}

export type __dictionary_B = {
    readonly "entry" ?: __interface_definition_B
}

export type __members_B = {
    readonly "definition" ?: __interface_definition_B
}

export type __group_B = {
    readonly "members" ?: { [key:string]: __members_B } //| (add: (key: string, entry: __members_B ) => void )
}

export type __interface_return_type_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_return_type_B = {
}

export type __return_type_method_TU_Builder =
    | ["interface", __interface_return_type_B]
    | ["void", __void_return_type_B]

export type __method_B = {
    readonly "return type" ?: __return_type_method_TU_Builder
    readonly "type" ?: __type_reference_B
}

export type __reference_B = {
    readonly "interface" ?: string
    readonly "namespace selection" ?: __namespace_selection_B
}

export type __type_TU_Builder =
    | ["dictionary", __dictionary_B]
    | ["group", __group_B]
    | ["method", __method_B]
    | ["reference", __reference_B]

export type __interface_definition_B = {
    readonly "type" ?: __type_TU_Builder
}

export type __argument_type_B = {
    readonly "argument" ?: string
}

export type __entries_B = {
    readonly "expression" ?: __interface_expression_B
}

export type __dictionary_type_B = {
    readonly "entries" ?: { [key:string]: __entries_B } //| (add: (key: string, entry: __entries_B ) => void )
}

export type __members_inline_B = {
    readonly "expression" ?: __interface_expression_B
}

export type __inline_B = {
    readonly "members" ?: { [key:string]: __members_inline_B } //| (add: (key: string, entry: __members_inline_B ) => void )
}

export type __strategy_TU_Builder =
    | ["inline", __inline_B]

export type __group_type_B = {
    readonly "strategy" ?: __strategy_TU_Builder
}

export type __argument_strategy_B = {
    readonly "argument" ?: string
}

export type __inline_procedure_B = {
    readonly "call" ?: __procedure_call_B
    readonly "specification" ?: __internal_procedure_specification_B
}

export type __procedure_implementation_B = {
    readonly "block" ?: __procedure_block_B
}

export type __strategy_method_TU_Builder =
    | ["argument", __argument_strategy_B]
    | ["inline procedure", __inline_procedure_B]
    | ["procedure implementation", __procedure_implementation_B]

export type __method_type_B = {
    readonly "strategy" ?: __strategy_method_TU_Builder
}

export type __procedure_call6_B = {
    readonly "procedure call" ?: __named_procedure_call_B
}

export type __strategy_reference_TU_Builder =
    | ["procedure call6", __procedure_call6_B]

export type __reference_type_B = {
    readonly "strategy" ?: __strategy_reference_TU_Builder
}

export type __type_initialize_TU_Builder =
    | ["dictionary", __dictionary_type_B]
    | ["group", __group_type_B]
    | ["method", __method_type_B]
    | ["reference", __reference_type_B]

export type __initialize_B = {
    readonly "type" ?: __type_initialize_TU_Builder
}

export type __type_interface_expression_TU_Builder =
    | ["argument", __argument_type_B]
    | ["initialize", __initialize_B]

export type __interface_expression_B = {
    readonly "type" ?: __type_interface_expression_TU_Builder
}

export type __members_group_B = {
    readonly "definition" ?: __interface_definition_B
}

export type __group_type_parameters_B = {
    readonly "members" ?: { [key:string]: __members_group_B } //| (add: (key: string, entry: __members_group_B ) => void )
}

export type __interface_return_type_method_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_return_type_method_B = {
}

export type __return_type_method_type_TU_Builder =
    | ["interface", __interface_return_type_method_B]
    | ["void", __void_return_type_method_B]

export type __method_type_parameters_B = {
    readonly "return type" ?: __return_type_method_type_TU_Builder
    readonly "type" ?: __nested_type_reference_B
}

export type __reference_type_parameters_B = {
    readonly "interface" ?: string
    readonly "namespace selection" ?: __namespace_selection_B
}

export type __type_parameters_TU_Builder =
    | ["group", __group_type_parameters_B]
    | ["method", __method_type_parameters_B]
    | ["reference", __reference_type_parameters_B]

export type __parameters_B = {
    readonly "type" ?: __type_parameters_TU_Builder
}

export type __interface_return_type_internal_procedure_specification_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_return_type_internal_procedure_specification_B = {
}

export type __return_type_internal_procedure_specification_TU_Builder =
    | ["interface", __interface_return_type_internal_procedure_specification_B]
    | ["void", __void_return_type_internal_procedure_specification_B]

export type __internal_procedure_specification_B = {
    readonly "block" ?: __procedure_block_B
    readonly "parameters" ?: { [key:string]: __parameters_B } //| (add: (key: string, entry: __parameters_B ) => void )
    readonly "return type" ?: __return_type_internal_procedure_specification_TU_Builder
}

export type __no_B = {
    readonly "on missing" ?: __type_expression_B
}

export type __yes_B = {
}

export type __guaranteed_TU_Builder =
    | ["no", __no_B]
    | ["yes", __yes_B]

export type __missing_handler_B = {
    readonly "guaranteed" ?: __guaranteed_TU_Builder
}

export type __external_B = {
    readonly "builder" ?: string
    readonly "method" ?: string
}

export type __local_B = {
    readonly "procedure" ?: string
}

export type __type_named_procedure_call_TU_Builder =
    | ["external", __external_B]
    | ["local", __local_B]

export type __named_procedure_call_B = {
    readonly "procedure call" ?: __procedure_call_B
    readonly "type" ?: __type_named_procedure_call_TU_Builder
}

export type __type_arguments_B = {
    readonly "type" ?: string
}

export type __namespace_reference_B = {
    readonly "namespace" ?: string
    readonly "type arguments" ?: { [key:string]: __type_arguments_B } //| (add: (key: string, entry: __type_arguments_B ) => void )
}

export type __current_B = {
}

export type __other_B = {
    readonly "namespace reference" ?: __namespace_reference_B
}

export type __which_TU_Builder =
    | ["current", __current_B]
    | ["other", __other_B]

export type __namespace_selection_B = {
    readonly "which" ?: __which_TU_Builder
}

export type __dictionary_type_steps_B = {
}

export type __group_type_steps_B = {
    readonly "property" ?: string
}

export type __list_B = {
}

export type __tagged_union_option_B = {
    readonly "option" ?: string
}

export type __type_steps_TU_Builder =
    | ["dictionary", __dictionary_type_steps_B]
    | ["group", __group_type_steps_B]
    | ["list", __list_B]
    | ["tagged union option", __tagged_union_option_B]

export type __steps_nested_type_reference_B = {
    readonly "type" ?: __type_steps_TU_Builder
}

export type __nested_type_reference_B = {
    readonly "namespace reference" ?: __namespace_reference_B
    readonly "steps" ?: __steps_nested_type_reference_B[] //| { callback: (value: __steps_nested_type_reference_B ) => void }
    readonly "type" ?: string
}

export type __external_interface_call_B = {
    readonly "expression" ?: __type_expression_B
    readonly "interface" ?: string
}

export type __internal_interface_call_B = {
    readonly "expression" ?: __type_expression_B
    readonly "interface" ?: string
}

export type __add_entry_B = {
    readonly "expression" ?: __type_expression_B
    readonly "key" ?: __string_expression_B
}

export type __strategy_dictionary_TU_Builder =
    | ["add entry", __add_entry_B]

export type __dictionary_type_state_change_B = {
    readonly "strategy" ?: __strategy_dictionary_TU_Builder
}

export type __add_element_B = {
    readonly "expression" ?: __type_expression_B
}

export type __strategy_list_TU_Builder =
    | ["add element", __add_element_B]

export type __list_type_B = {
    readonly "strategy" ?: __strategy_list_TU_Builder
}

export type __string_B = {
    readonly "initializer" ?: __string_expression_B
}

export type __type4_B = {
    readonly "expression" ?: __type_expression_B
}

export type __type_state_change_TU_Builder =
    | ["dictionary", __dictionary_type_state_change_B]
    | ["list", __list_type_B]
    | ["string", __string_B]
    | ["type4", __type4_B]

export type __state_change_B = {
    readonly "state" ?: string
    readonly "type" ?: __type_state_change_TU_Builder
}

export type __type_effects_TU_Builder =
    | ["external interface call", __external_interface_call_B]
    | ["internal interface call", __internal_interface_call_B]
    | ["state change", __state_change_B]

export type __effects_B = {
    readonly "type" ?: __type_effects_TU_Builder
}

export type __markers_B = {
    readonly "selection" ?: __context_selection_B
}

export type __nested_procedures_B = {
    readonly "specification" ?: __internal_procedure_specification_B
}

export type __interface_return_value_B = {
    readonly "expression" ?: __interface_expression_B
}

export type __void_return_value_B = {
}

export type __return_value_TU_Builder =
    | ["interface", __interface_return_value_B]
    | ["void", __void_return_value_B]

export type __dictionary_type_states_B = {
    readonly "type" ?: __nested_type_reference_B
}

export type __list_type_states_B = {
    readonly "type" ?: __nested_type_reference_B
}

export type __string_type_B = {
    readonly "initial value" ?: string
}

export type __type5_B = {
    readonly "expression" ?: __type_expression_B
    readonly "nested type" ?: __nested_type_reference_B
}

export type __type_states_TU_Builder =
    | ["dictionary", __dictionary_type_states_B]
    | ["list", __list_type_states_B]
    | ["string", __string_type_B]
    | ["type5", __type5_B]

export type __states_B = {
    readonly "type" ?: __type_states_TU_Builder
}

export type __procedure_block_B = {
    readonly "effects" ?: __effects_B[] //| { callback: (value: __effects_B ) => void }
    readonly "markers" ?: { [key:string]: __markers_B } //| (add: (key: string, entry: __markers_B ) => void )
    readonly "nested procedures" ?: { [key:string]: __nested_procedures_B } //| (add: (key: string, entry: __nested_procedures_B ) => void )
    readonly "return value" ?: __return_value_TU_Builder
    readonly "states" ?: { [key:string]: __states_B } //| (add: (key: string, entry: __states_B ) => void )
}

export type __interface_arguments_B = {
    readonly "expression" ?: __interface_expression_B
}

export type __procedure_call_B = {
    readonly "interface arguments" ?: { [key:string]: __interface_arguments_B } //| (add: (key: string, entry: __interface_arguments_B ) => void )
}

export type __type_parameters_B = {
}

export type __function_implementations_B = {
    readonly "block" ?: __type_expression_block_B
    readonly "declaration" ?: string
    readonly "namespace reference" ?: __namespace_reference_B
    readonly "type parameters" ?: { [key:string]: __type_parameters_B } //| (add: (key: string, entry: __type_parameters_B ) => void )
}

export type __function_declarations_B = {
    readonly "declaration" ?: __function_declaration_B
}

export type __methods_B = {
    readonly "declaration" ?: __builder_procedure_declaration_B
}

export type __interface_builders_B = {
    readonly "methods" ?: { [key:string]: __methods_B } //| (add: (key: string, entry: __methods_B ) => void )
}

export type __interfaces_namespaces_B = {
    readonly "definition" ?: __interface_definition_B
}

export type __builders_B = {
    readonly "builder" ?: string
    readonly "namespace selection" ?: __namespace_selection_B
}

export type __functions_B = {
    readonly "declaration" ?: __function_declaration_B
}

export type __interfaces_procedure_declarations_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __interface_return_type_procedure_declarations_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_return_type_procedure_declarations_B = {
}

export type __return_type_procedure_declarations_TU_Builder =
    | ["interface", __interface_return_type_procedure_declarations_B]
    | ["void", __void_return_type_procedure_declarations_B]

export type __procedure_declarations_B = {
    readonly "builders" ?: { [key:string]: __builders_B } //| (add: (key: string, entry: __builders_B ) => void )
    readonly "context" ?: __type_reference_B
    readonly "functions" ?: { [key:string]: __functions_B } //| (add: (key: string, entry: __functions_B ) => void )
    readonly "interfaces" ?: { [key:string]: __interfaces_procedure_declarations_B } //| (add: (key: string, entry: __interfaces_procedure_declarations_B ) => void )
    readonly "return type" ?: __return_type_procedure_declarations_TU_Builder
}

export type __type_parameters_namespaces_B = {
}

export type __types_B = {
    readonly "type" ?: __type_B
}

export type __namespaces_B = {
    readonly "function declarations" ?: { [key:string]: __function_declarations_B } //| (add: (key: string, entry: __function_declarations_B ) => void )
    readonly "interface builders" ?: { [key:string]: __interface_builders_B } //| (add: (key: string, entry: __interface_builders_B ) => void )
    readonly "interfaces" ?: { [key:string]: __interfaces_namespaces_B } //| (add: (key: string, entry: __interfaces_namespaces_B ) => void )
    readonly "procedure declarations" ?: { [key:string]: __procedure_declarations_B } //| (add: (key: string, entry: __procedure_declarations_B ) => void )
    readonly "type parameters" ?: { [key:string]: __type_parameters_namespaces_B } //| (add: (key: string, entry: __type_parameters_namespaces_B ) => void )
    readonly "types" ?: { [key:string]: __types_B } //| (add: (key: string, entry: __types_B ) => void )
}

export type __type_parameters_procedure_implementations_B = {
}

export type __procedure_implementations_B = {
    readonly "block" ?: __procedure_block_B
    readonly "declaration" ?: string
    readonly "namespace reference" ?: __namespace_reference_B
    readonly "type parameters" ?: { [key:string]: __type_parameters_procedure_implementations_B } //| (add: (key: string, entry: __type_parameters_procedure_implementations_B ) => void )
}

export type __root_B = {
    readonly "function implementations" ?: { [key:string]: __function_implementations_B } //| (add: (key: string, entry: __function_implementations_B ) => void )
    readonly "namespaces" ?: { [key:string]: __namespaces_B } //| (add: (key: string, entry: __namespaces_B ) => void )
    readonly "procedure implementations" ?: { [key:string]: __procedure_implementations_B } //| (add: (key: string, entry: __procedure_implementations_B ) => void )
}

export type __literal_B = {
    readonly "value" ?: string
}

export type __select_B = {
    readonly "context" ?: __context_selection_B
}

export type __state_strategy_B = {
    readonly "state" ?: string
}

export type __strategy_string_expression_TU_Builder =
    | ["literal", __literal_B]
    | ["select", __select_B]
    | ["state", __state_strategy_B]

export type __string_expression_B = {
    readonly "strategy" ?: __strategy_string_expression_TU_Builder
}

export type __optional_B = {
}

export type __required_B = {
}

export type __occurence_TU_Builder =
    | ["optional", __optional_B]
    | ["required", __required_B]

export type __boolean_B = {
}

export type __dictionary_type_type_B = {
    readonly "entry" ?: __type_B
}

export type __properties_B = {
    readonly "type" ?: __type_B
}

export type __group_type_type_B = {
    readonly "properties" ?: { [key:string]: __properties_B } //| (add: (key: string, entry: __properties_B ) => void )
}

export type __list_type_type_B = {
    readonly "element" ?: __type_B
}

export type __number_B = {
}

export type __string_type_type_B = {
}

export type __options_B = {
    readonly "type" ?: __type_B
}

export type __tagged_union_B = {
    readonly "options" ?: { [key:string]: __options_B } //| (add: (key: string, entry: __options_B ) => void )
}

export type __type_argument_B = {
    readonly "argument" ?: string
}

export type __type_reference_type_B = {
    readonly "type" ?: __type_reference_B
}

export type __type_type_TU_Builder =
    | ["boolean", __boolean_B]
    | ["dictionary", __dictionary_type_type_B]
    | ["group", __group_type_type_B]
    | ["list", __list_type_type_B]
    | ["number", __number_B]
    | ["string", __string_type_type_B]
    | ["tagged union", __tagged_union_B]
    | ["type argument", __type_argument_B]
    | ["type reference", __type_reference_type_B]

export type __type_B = {
    readonly "occurence" ?: __occurence_TU_Builder
    readonly "type" ?: __type_type_TU_Builder
}

export type __copy_B = {
    readonly "context" ?: __guaranteed_context_selection_B
}

export type __dictionary_from_state_B = {
    readonly "state" ?: string
}

export type __boolean_type_B = {
    readonly "value" ?: string
}

export type __dictionary_type_literal_B = {
}

export type __properties_group_B = {
    readonly "expression" ?: __type_expression_B
}

export type __group_type_literal_B = {
    readonly "properties" ?: { [key:string]: __properties_group_B } //| (add: (key: string, entry: __properties_group_B ) => void )
}

export type __list_type_literal_B = {
}

export type __number_type_B = {
    readonly "value" ?: string
}

export type __string_type_literal_B = {
    readonly "value" ?: string
}

export type __tagged_union_type_B = {
    readonly "data" ?: __type_expression_B
    readonly "option" ?: string
}

export type __type_argument_type_B = {
}

export type __type_reference_type_literal_B = {
    readonly "expression" ?: __type_expression_B
}

export type __type_literal_TU_Builder =
    | ["boolean", __boolean_type_B]
    | ["dictionary", __dictionary_type_literal_B]
    | ["group", __group_type_literal_B]
    | ["list", __list_type_literal_B]
    | ["number", __number_type_B]
    | ["string", __string_type_literal_B]
    | ["tagged union", __tagged_union_type_B]
    | ["type argument", __type_argument_type_B]
    | ["type reference", __type_reference_type_literal_B]

export type __literal_strategy_B = {
    readonly "type" ?: __type_literal_TU_Builder
}

export type __map_B = {
    readonly "context" ?: __guaranteed_context_selection_B
    readonly "entry" ?: __type_expression_B
}

export type __options_switch_B = {
    readonly "expression" ?: __type_expression_B
}

export type __switch_B = {
    readonly "context" ?: __guaranteed_context_selection_B
    readonly "options" ?: { [key:string]: __options_switch_B } //| (add: (key: string, entry: __options_switch_B ) => void )
}

export type __strategy_type_expression_TU_Builder =
    | ["copy", __copy_B]
    | ["dictionary from state", __dictionary_from_state_B]
    | ["literal", __literal_strategy_B]
    | ["map", __map_B]
    | ["switch", __switch_B]

export type __type_expression_B = {
    readonly "strategy" ?: __strategy_type_expression_TU_Builder
}

export type __functions_type_expression_block_B = {
    readonly "block" ?: __type_expression_block_B
    readonly "declaration" ?: __function_declaration_B
}

export type __type_expression_block_B = {
    readonly "expression" ?: __type_expression_B
    readonly "functions" ?: { [key:string]: __functions_type_expression_block_B } //| (add: (key: string, entry: __functions_type_expression_block_B ) => void )
}

export type __type_reference_B = {
    readonly "namespace selection" ?: __namespace_selection_B
    readonly "type" ?: string
}
