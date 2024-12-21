import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ViewDaySchedule = ({ lessons }) => {
    const getName = (fields) => {
        return (`
            ${fields?.split(' ')[0]} ${fields?.split(' ')[1][0]}. ${fields?.split(' ')[2][0]}.
        `)
    }

    // Структура для рендера пар на основе типа
    const renderLessonByType = (lesson) => {
        const { type, pairNumber, fields } = lesson;

        const commonStyles = {
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            marginBottom: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
        };

        switch (type) {
            case "type1":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',

                                }}>
                                    {fields.main_subject || "Не указано"}
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.main_teacher)}</div>
                                    <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.main_room || "Не указана"}</div>
                                    <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.main_type || "Не указан"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "type2":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', width: '100%' }}>
                                <div style={{ width: '50%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 1</div>
                                    <div>{fields.subgroup1_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_type || "Не указан"}</div>
                                    </div>
                                </div>
                                <div style={{ width: '50%', padding: '12px 25px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 2</div>
                                    <div>{fields.subgroup2_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_type || "Не указан"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type3":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель</div>
                                    <div>{fields.numerator_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.numerator_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.numerator_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.numerator_type || "Не указан"}</div>
                                    </div>
                                </div>
                                <div style={{ width: '100%', padding: '12px 25px', borderTop: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель</div>
                                    <div>{fields.denominator_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.denominator_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.denominator_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.denominator_type || "Не указан"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type4":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', width: '100%' }}>
                                <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 1 - Числитель</div>
                                        <div>{fields.subgroup1_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_numerator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', borderTop: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 1 - Знаменатель</div>
                                        <div>{fields.subgroup2_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%', padding: '12px 25px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 2</div>
                                    <div>{fields.subgroup2_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_type || "Не указан"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type5":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', width: '100%' }}>
                                <div style={{ width: '50%', padding: '12px 25px', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 1</div>
                                    <div>{fields.subgroup1_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_type || "Не указан"}</div>
                                    </div>
                                </div>

                                <div style={{ width: '50%', display: 'flex', borderLeft: "1px solid rgba(129, 33, 45, 0.8)", flexDirection: 'column' }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 2 - Числитель</div>
                                        <div>{fields.subgroup1_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_numerator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', borderTop: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Подгруппа 2 - Знаменатель</div>
                                        <div>{fields.subgroup2_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type6":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель - Подгруппа 1</div>
                                        <div>{fields.subgroup1_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_numerator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)" }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель - Подгруппа 2</div>
                                        <div>{fields.subgroup2_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_numerator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '100%', padding: '12px 25px', borderTop: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель</div>
                                    <div>{fields.denominator_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.denominator_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.denominator_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.denominator_type || "Не указан"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type7":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div style={{ width: '100%', padding: '12px 25px', borderBottom: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель</div>
                                    <div>{fields.numerator_subject || "Не указано"}</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.numerator_teacher) || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.numerator_room || "Не указана"}</div>
                                        <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.numerator_type || "Не указан"}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель - Подгруппа 1</div>
                                        <div>{fields.subgroup1_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)" }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель - Подгруппа 2</div>
                                        <div>{fields.subgroup2_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            case "type8":
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '100%',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: "1px solid rgba(129, 33, 45, 0.8)",
                            width: '100%',
                            borderRadius: "12px"
                        }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pairNumber}</div>
                            <div style={{ borderLeft: "1px solid rgba(129, 33, 45, 0.8)", display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div style={{ display: 'flex', width: '100%', borderBottom: "1px solid rgba(129, 33, 45, 0.8)" }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель - Подгруппа 1</div>
                                        <div>{fields.subgroup1_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_numerator_) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)" }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Числитель - Подгруппа 2</div>
                                        <div>{fields.subgroup2_numerator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_numerator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_numerator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_numerator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель - Подгруппа 1</div>
                                        <div>{fields.subgroup1_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup1_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup1_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', padding: '12px 25px', display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: "1px solid rgba(129, 33, 45, 0.8)" }}>
                                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.8)' }}>Знаменатель - Подгруппа 2</div>
                                        <div>{fields.subgroup2_denominator_subject || "Не указано"}</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{getName(fields.subgroup2_denominator_teacher) || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_room || "Не указана"}</div>
                                            <div style={{ borderRadius: "12px", backgroundColor: 'rgba(129, 33, 45, 0.8)', color: '#fff', padding: '10px 15px' }}>{fields.subgroup2_denominator_type || "Не указан"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                );

            default:
                return (
                    <div>Занятие не найдено</div>
                );
        }
    };

    return (
        <Grid container spacing={2}>
            {lessons.map((lesson, index) => (
                <Grid item xs={12} key={index}>
                    {renderLessonByType(lesson)}
                </Grid>
            ))}
        </Grid>
    );
};

export default ViewDaySchedule;
