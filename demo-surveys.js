var surveys = [
  // {
  //   id: "1",
  //   name: "Product feedback survey",
  //   json: {
  //     pages: [
  //       {
  //         name: "page1",
  //         elements: [
  //           {
  //             type: "matrix",
  //             name: "Quality",
  //             title:
  //               "Please indicate if you agree or disagree with the following statements",
  //             columns: [
  //               {
  //                 value: 1,
  //                 text: "Strongly Disagree"
  //               },
  //               {
  //                 value: 2,
  //                 text: "Disagree"
  //               },
  //               {
  //                 value: 3,
  //                 text: "Neutral"
  //               },
  //               {
  //                 value: 4,
  //                 text: "Agree"
  //               },
  //               {
  //                 value: 5,
  //                 text: "Strongly Agree"
  //               }
  //             ],
  //             rows: [
  //               {
  //                 value: "affordable",
  //                 text: "Product is affordable"
  //               },
  //               {
  //                 value: "does what it claims",
  //                 text: "Product does what it claims"
  //               },
  //               {
  //                 value: "better then others",
  //                 text: "Product is better than other products on the market"
  //               },
  //               {
  //                 value: "easy to use",
  //                 text: "Product is easy to use"
  //               }
  //             ]
  //           },
  //           {
  //             type: "rating",
  //             name: "satisfaction",
  //             title: "How satisfied are you with the Product?",
  //             minRateDescription: "Not Satisfied",
  //             maxRateDescription: "Completely satisfied"
  //           },
  //           {
  //             type: "rating",
  //             name: "recommend friends",
  //             visible: false,
  //             visibleIf: "{satisfaction} > 3",
  //             title:
  //               "How likely are you to recommend the Product to a friend or co-worker?",
  //             minRateDescription: "Will not recommend",
  //             maxRateDescription: "I will recommend"
  //           },
  //           {
  //             type: "comment",
  //             name: "suggestions",
  //             title: "What would make you more satisfied with the Product?"
  //           }
  //         ]
  //       },
  //       {
  //         name: "page2",
  //         elements: [
  //           {
  //             type: "radiogroup",
  //             name: "price to competitors",
  //             title: "Compared to our competitors, do you feel the Product is",
  //             choices: [
  //               "Less expensive",
  //               "Priced about the same",
  //               "More expensive",
  //               "Not sure"
  //             ]
  //           },
  //           {
  //             type: "radiogroup",
  //             name: "price",
  //             title: "Do you feel our current price is merited by our product?",
  //             choices: [
  //               {
  //                 value: "correct",
  //                 text: "Yes, the price is about right"
  //               },
  //               {
  //                 value: "low",
  //                 text: "No, the price is too low for your product"
  //               },
  //               {
  //                 value: "high",
  //                 text: "No, the price is too high for your product"
  //               }
  //             ]
  //           },
  //           {
  //             type: "multipletext",
  //             name: "pricelimit",
  //             title: "What is the... ",
  //             items: [
  //               {
  //                 name: "mostamount",
  //                 title: "Most amount you would every pay for a product like ours"
  //               },
  //               {
  //                 name: "leastamount",
  //                 title: "The least amount you would feel comfortable paying"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         name: "page3",
  //         elements: [
  //           {
  //             type: "text",
  //             name: "email",
  //             title:
  //               "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
  //           }
  //         ]
  //       }
  //     ]
  //   },
  // },
  // {
  //   id: "2",
  //   name: "Customer and his/her partner income survey",
  //   json: {
  //     completeText: "Finish",
  //     pageNextText: "Continue",
  //     pagePrevText: "Previous",
  //     pages: [
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "html",
  //                 name: "income_intro",
  //                 html:
  //                   "Income. In this section, you will be asked about your current employment and any other way you and your partner currently receive income. It will be handy to have the following in front of you: Payslip (for employment details), A current Centrelink Schedule for any account based pension from super, annuities, or other income stream products that you own. If you don't have a current one you can get these schedules by contacting your income stream provider. Latest statement from any payments (from Centrelink or other authority)."
  //               }
  //             ],
  //             name: "panel1"
  //           }
  //         ],
  //         name: "page0"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "radiogroup",
  //                 choices: [
  //                   "Married",
  //                   "In a registered relationship",
  //                   "Living with my partner",
  //                   "Widowed",
  //                   "Single"
  //                 ],
  //                 name: "maritalstatus_c",
  //                 title: " "
  //               }
  //             ],
  //             name: "panel13",
  //             title: "What is your marital status?"
  //           }
  //         ],
  //         name: "page1"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "member_receives_income_from_employment",
  //                     title: " "
  //                   },
  //                   {
  //                     type: "checkbox",
  //                     name: "member_type_of_employment",
  //                     visible: false,
  //                     visibleIf: "{member_receives_income_from_employment} =1",
  //                     title: "  ",
  //                     isRequired: true,
  //                     choices: [
  //                       "Self employment",
  //                       "All other types of employment"
  //                     ]
  //                   }
  //                 ],
  //                 name: "panel2",
  //                 title: "You"
  //               },
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "partner_receives_income_from_employment",
  //                     title: " "
  //                   },
  //                   {
  //                     type: "checkbox",
  //                     name: "partner_type_of_employment",
  //                     visible: false,
  //                     visibleIf: "{partner_receives_income_from_employment} =1",
  //                     title: " ",
  //                     isRequired: true,
  //                     choices: [
  //                       "Self employment",
  //                       "All other types of employment"
  //                     ]
  //                   }
  //                 ],
  //                 name: "panel1",
  //                 startWithNewLine: false,
  //                 title: "Your Partner",
  //                 visible: false,
  //                 visibleIf:
  //                   "{maritalstatus_c} = 'Married' or {maritalstatus_c} = 'In a registered relationship' or {maritalstatus_c} = 'Living with my partner'"
  //               }
  //             ],
  //             name: "panel5",
  //             title:
  //               "Do you and/or your partner currently receive income from employment?"
  //           }
  //         ],
  //         name: "page2"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "paneldynamic",
  //                     minPanelCount: 1,
  //                     name: "member_arrray_employer_names",
  //                     valueName: "member_arrray_employer",
  //                     title: "Please enter all your employers",
  //                     panelAddText: "Add another employer",
  //                     panelCount: 1,
  //                     templateElements: [
  //                       {
  //                         type: "text",
  //                         name: "member_employer_name",
  //                         valueName: "name",
  //                         title: "Name of employer"
  //                       }
  //                     ]
  //                   }
  //                 ],
  //                 name: "panel2",
  //                 title: "You",
  //                 visible: false,
  //                 visibleIf:
  //                   "{member_type_of_employment} contains 'All other types of employment'"
  //               },
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "paneldynamic",
  //                     minPanelCount: 1,
  //                     name: "partner_arrray_employer_names",
  //                     valueName: "partner_arrray_employer",
  //                     title: "Please enter all your partner employers",
  //                     panelAddText: "Add another employer",
  //                     panelCount: 1,
  //                     templateElements: [
  //                       {
  //                         type: "text",
  //                         name: "partner_employer_name",
  //                         valueName: "name",
  //                         title: "Name of employer"
  //                       }
  //                     ]
  //                   }
  //                 ],
  //                 name: "panel8",
  //                 startWithNewLine: false,
  //                 title: "Your Partner",
  //                 visible: false,
  //                 visibleIf:
  //                   "{partner_type_of_employment} contains 'All other types of employment'"
  //               }
  //             ],
  //             name: "panel6",
  //             title: "Who are you employed by?"
  //           }
  //         ],
  //         name: "page3.1",
  //         visible: false,
  //         visibleIf:
  //           "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "paneldynamic",
  //                     renderMode: "progressTop",
  //                     allowAddPanel: false,
  //                     allowRemovePanel: false,
  //                     name: "member_arrray_employer_info",
  //                     title: "Your employers",
  //                     valueName: "member_arrray_employer",
  //                     panelCount: 1,
  //                     templateElements: [
  //                       {
  //                         type: "panel",
  //                         name: "panel_member_employer_address",
  //                         title: "Address",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             name: "member_employer_address",
  //                             valueName: "address",
  //                             title: "Address"
  //                           },
  //                           {
  //                             type: "text",
  //                             name: "member_employer_phone",
  //                             valueName: "phone",
  //                             title: "Phone number:"
  //                           },
  //                           {
  //                             type: "text",
  //                             name: "member_employer_abn",
  //                             valueName: "abn",
  //                             title: "ABN"
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_member_employer_role",
  //                         title: "What is your role?",
  //                         elements: [
  //                           {
  //                             type: "radiogroup",
  //                             choices: [
  //                               "Full time",
  //                               "Part time",
  //                               "Casual",
  //                               "Seasonal"
  //                             ],
  //                             name: "member_employer_role",
  //                             title: "Your role",
  //                             valueName: "role"
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_member_employer_hours_work",
  //                         title: "What hours do you work?",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             inputType: "number",
  //                             name: "member_employer_hours_worked",
  //                             valueName: "hours_worked",
  //                             title: "Hours:"
  //                           },
  //                           {
  //                             type: "dropdown",
  //                             name: "member_employer_hours_worked_frequency",
  //                             title: "Worked Frequency:",
  //                             valueName: "hours_worked_frequency",
  //                             startWithNewLine: false,
  //                             defaultValue: "Year",
  //                             choices: [
  //                               "Day",
  //                               "Week",
  //                               "Fortnight",
  //                               "Month",
  //                               "Year"
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_member_employer_income",
  //                         title: "What income do you receive?",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             inputType: "number",
  //                             name: "member_employer_income",
  //                             valueName: "income",
  //                             title: "Income:"
  //                           },
  //                           {
  //                             type: "dropdown",
  //                             name: "member_employer_income_frequency",
  //                             title: "Income Frequency",
  //                             valueName: "income_frequency",
  //                             startWithNewLine: false,
  //                             defaultValue: "Year",
  //                             choices: [
  //                               "Day",
  //                               "Week",
  //                               "Fortnight",
  //                               "Month",
  //                               "Year"
  //                             ]
  //                           }
  //                         ]
  //                       }
  //                     ],
  //                     templateTitle: "Employer name: {panel.name}"
  //                   }
  //                 ],
  //                 name: "panel17",
  //                 title: "You",
  //                 visibleIf:
  //                   "{member_type_of_employment} contains 'All other types of employment'"
  //               },
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "paneldynamic",
  //                     renderMode: "progressTop",
  //                     allowAddPanel: false,
  //                     allowRemovePanel: false,
  //                     name: "partner_arrray_employer_info",
  //                     title: "Your partner employers",
  //                     valueName: "partner_arrray_employer",
  //                     panelCount: 1,
  //                     templateElements: [
  //                       {
  //                         type: "panel",
  //                         name: "panel_partner_employer_address",
  //                         title: "Address",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             name: "partner_employer_address",
  //                             valueName: "address",
  //                             title: "Address:"
  //                           },
  //                           {
  //                             type: "text",
  //                             name: "partner_employer_phone",
  //                             valueName: "phone",
  //                             title: "Phone number"
  //                           },
  //                           {
  //                             type: "text",
  //                             name: "partner_employer_abn",
  //                             valueName: "abn",
  //                             title: "ABN"
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_partner_employer_role",
  //                         title: "What is your role?",
  //                         elements: [
  //                           {
  //                             type: "radiogroup",
  //                             choices: [
  //                               "Full time",
  //                               "Part time",
  //                               "Casual",
  //                               "Seasonal"
  //                             ],
  //                             name: "partner_employer_role",
  //                             title: "Your role",
  //                             valueName: "role"
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_partner_employer_hours_work",
  //                         title: "What hours do you work?",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             inputType: "number",
  //                             name: "partner_employer_hours_worked",
  //                             valueName: "hours_worked",
  //                             title: "Hours"
  //                           },
  //                           {
  //                             type: "dropdown",
  //                             name: "partner_employer_hours_worked_frequency",
  //                             valueName: "hours_worked_frequency",
  //                             title: "Worked Frequency:",
  //                             startWithNewLine: false,
  //                             defaultValue: "Year",
  //                             choices: [
  //                               "Day",
  //                               "Week",
  //                               "Fortnight",
  //                               "Month",
  //                               "Year"
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       {
  //                         type: "panel",
  //                         name: "panel_partner_employer_income",
  //                         title: "What income do you receive?",
  //                         elements: [
  //                           {
  //                             type: "text",
  //                             inputType: "number",
  //                             name: "partner_employer_income",
  //                             valueName: "income",
  //                             title: "Income:"
  //                           },
  //                           {
  //                             type: "dropdown",
  //                             name: "partner_employer_income_frequency",
  //                             valueName: "income_frequency",
  //                             title: "Income frequency:",
  //                             startWithNewLine: false,
  //                             defaultValue: "Year",
  //                             choices: [
  //                               "Day",
  //                               "Week",
  //                               "Fortnight",
  //                               "Month",
  //                               "Year"
  //                             ]
  //                           }
  //                         ]
  //                       }
  //                     ],
  //                     templateTitle: "Employer name: {panel.name}"
  //                   }
  //                 ],
  //                 name: "panel18",
  //                 startWithNewLine: false,
  //                 title: "You partner",
  //                 visibleIf:
  //                   "{partner_type_of_employment} contains 'All other types of employment'"
  //               }
  //             ],
  //             name: "panel16",
  //             title: "Tells us about your employer(s)"
  //           }
  //         ],
  //         name: "page3.2",
  //         visibleIf:
  //           "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "member_receive_fringe_benefits",
  //                     title: " "
  //                   },
  //                   {
  //                     type: "panel",
  //                     elements: [
  //                       {
  //                         type: "text",
  //                         name: "member_fringe_benefits_type"
  //                       },
  //                       {
  //                         type: "text",
  //                         name: "member_fringe_benefits_value"
  //                       },
  //                       {
  //                         type: "radiogroup",
  //                         choices: ["Grossed up", "Not grossed up"],
  //                         name: "member_fringe_benefits_grossing"
  //                       }
  //                     ],
  //                     name: "panel11",
  //                     visible: false,
  //                     visibleIf: "{member_receive_fringe_benefits} = 1"
  //                   }
  //                 ],
  //                 name: "panel2",
  //                 title: "You",
  //                 visible: false,
  //                 visibleIf:
  //                   "{member_type_of_employment} contains 'All other types of employment'"
  //               },
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "partner_receive_fringe_benefits",
  //                     title: " "
  //                   },
  //                   {
  //                     type: "panel",
  //                     elements: [
  //                       {
  //                         type: "text",
  //                         name: "partner_fringe_benefits_type"
  //                       },
  //                       {
  //                         type: "text",
  //                         name: "partner_fringe_benefits_value"
  //                       },
  //                       {
  //                         type: "radiogroup",
  //                         choices: ["Grossed up", "Not grossed up"],
  //                         name: "partner_fringe_benefits_grossing"
  //                       }
  //                     ],
  //                     name: "panel12",
  //                     visible: false,
  //                     visibleIf: "{partner_receive_fringe_benefits} = 1"
  //                   }
  //                 ],
  //                 name: "panel1",
  //                 startWithNewLine: false,
  //                 title: "Your Partner",
  //                 visible: false,
  //                 visibleIf:
  //                   "{partner_type_of_employment} contains 'All other types of employment'"
  //               }
  //             ],
  //             name: "panel9",
  //             title: "Do any of your employers provide you with fringe benefits?"
  //           }
  //         ],
  //         name: "page4",
  //         visible: false,
  //         visibleIf:
  //           "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
  //       },
  //       {
  //         elements: [
  //           {
  //             type: "panel",
  //             elements: [
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "member_seasonal_intermittent_or_contract_work",
  //                     title: " "
  //                   }
  //                 ],
  //                 name: "panel2",
  //                 title: "You",
  //                 visible: false,
  //                 visibleIf: "{member_receives_income_from_employment} = 1"
  //               },
  //               {
  //                 type: "panel",
  //                 elements: [
  //                   {
  //                     type: "radiogroup",
  //                     choices: [
  //                       {
  //                         value: "1",
  //                         text: "Yes"
  //                       },
  //                       {
  //                         value: "0",
  //                         text: "No"
  //                       }
  //                     ],
  //                     colCount: 2,
  //                     isRequired: true,
  //                     name: "partner_seasonal_intermittent_or_contract_work",
  //                     title: " "
  //                   }
  //                 ],
  //                 name: "panel1",
  //                 startWithNewLine: false,
  //                 title: "Your Partner",
  //                 visible: false,
  //                 visibleIf: "{partner_receives_income_from_employment} =1 "
  //               }
  //             ],
  //             name: "panel10",
  //             title:
  //               "In the last 6 months, have you done any seasonal, intermittent or contract work?"
  //           }
  //         ],
  //         name: "page5",
  //         visible: false,
  //         visibleIf:
  //           "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
  //       }
  //     ],
  //     requiredText: "",
  //     showQuestionNumbers: "off",
  //     storeOthersAsComment: false
  //   }
  // }, 
  {
    id: "1",
    name: "C-GASP Level 1 Screener",
    json: {
      "title": "C-GASP Level 1 Screener",
      "description": "Children’s General Airway Screening Protocol. Developed by the Children’s Airway Screener Taskforce (CAST) committee of the ADA",
      "logo": "data:image/png;base64,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",
      "logoPosition": "right",
      "pages": [
       {
        "name": "page2",
        "elements": [
         {
          "type": "matrix",
          "name": "question1",
          "title": "DOES YOUR CHILD FREQUENTLY HAVE ANY OF THE FOLLOWING:",
          "isRequired": true,
          "columns": [
           {
            "value": "Column 1",
            "text": "YES"
           },
           {
            "value": "Column 2",
            "text": "NO"
           },
           {
            "value": "Column 3",
            "text": "DO NOT KNOW"
           }
          ],
          "rows": [
           {
            "value": "Row 1",
            "text": "1. Mouth Breathing / Lips Apart either while Awake or Asleep? "
           },
           {
            "value": "Row 2",
            "text": "2. While sleeping or napping: Snore (even slightly) / have Noisy Breathing / Difficulty Breathing / Pauses or gasping during Breathing? "
           },
           {
            "value": "Row 3",
            "text": "3. Neck Extended Upwards when Sleeping / Restless Sleep / Frequent Awakenings / Grinding or Clenching Teeth during Sleep? "
           },
           {
            "value": "Row 4",
            "text": "4, Upon wakening: Dry Mouth / Sore or achy Jaw / Headaches / Stuffy Nose / Difficulty Awakening in the Morning?"
           },
           {
            "value": "Row 5",
            "text": "5. Daytime Sleepiness or Tiredness / Daily Behavioral or Emotional Issues / Difficulty paying Attention / Hyperactivity / Difficulty at School? "
           }
          ],
          "isAllRowRequired": true
         },
         {
          "type": "rating",
          "name": "question2",
          "title": "How hard was it to complete this form?",
          "isRequired": true,
          "rateValues": [
           'Easy',
           'Average',
           'Hard'
          ],
          "minRateDescription": "",
          "maxRateDescription": ""
         },
         {
          "type": "comment",
          "name": "question3",
          "visibleIf": "{question2} = 3",
          "title": "If Difficult Why? "
         }
        ],
        "title": "For children ages 2 through 12 ",
        "description": "Please complete the entire questionnaire in order to address health related issues for your child."
       },
       {
        "name": "page3",
        "title": "Page 2"
       }
      ]
     }
  }
];

var results = [
  {
    id: "1",
    data: [
      { "Quality": { "affordable": "5", "better then others": "5", "does what it claims": "5", "easy to use": "5" }, "satisfaction": 5, "recommend friends": 5, "suggestions": "I am happy!", "price to competitors": "Not sure", "price": "low", "pricelimit": { "mostamount": "100", "leastamount": "100" } },
      { "Quality": { "affordable": "3", "does what it claims": "2", "better then others": "2", "easy to use": "3" }, "satisfaction": 3, "suggestions": "better support", "price to competitors": "Not sure", "price": "high", "pricelimit": { "mostamount": "60", "leastamount": "10" } }
    ]
  },
  {
    id: "2",
    data: [
      { "member_arrray_employer": [{}], "partner_arrray_employer": [{}], "maritalstatus_c": "Married", "member_receives_income_from_employment": "0", "partner_receives_income_from_employment": "0" },
      { "member_arrray_employer": [{}], "partner_arrray_employer": [{}], "maritalstatus_c": "Single", "member_receives_income_from_employment": "1", "member_type_of_employment": ["Self employment"], "member_seasonal_intermittent_or_contract_work": "0" }
    ]
  }
];

module.exports = {
  surveys: surveys,
  results: results,
  defaultName: "New Survey"
};
